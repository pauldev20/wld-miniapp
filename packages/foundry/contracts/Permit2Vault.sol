// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "../interfaces/IPermit2.sol";
import "../interfaces/IERC20.sol";

// Trivial vault that allows users to deposit ERC20 tokens then claim them later.
contract Permit2Vault is Ownable {
    bool private _reentrancyGuard;
    // The canonical permit2 contract.
    IPermit2 public immutable PERMIT2;
    // User -> token -> deposit balance
    mapping (address => mapping (IERC20 => uint256)) public tokenBalancesByUser;

    constructor(IPermit2 permit_) {
        PERMIT2 = permit_;
    }
    
    // Prevents reentrancy attacks via tokens with callback mechanisms. 
    modifier nonReentrant() {
        require(!_reentrancyGuard, 'no reentrancy');
        _reentrancyGuard = true;
        _;
        _reentrancyGuard = false;
    }

    // Deposit some amount of an ERC20 token from the caller
    // into this contract using Permit2.
    function depositERC20(
        IERC20 token,
        uint256 amount,
        uint256 nonce,
        uint256 deadline,
        bytes calldata signature
    ) external nonReentrant {
        // Credit the caller.
        tokenBalancesByUser[msg.sender][token] += amount;
        // Transfer tokens from the caller to ourselves.
        PERMIT2.permitTransferFrom(
            // The permit message. Spender will be inferred as the caller (us).
            IPermit2.PermitTransferFrom({
                permitted: IPermit2.TokenPermissions({
                    token: token,
                    amount: amount
                }),
                nonce: nonce,
                deadline: deadline
            }),
            // The transfer recipient and amount.
            IPermit2.SignatureTransferDetails({
                to: address(this),
                requestedAmount: amount
            }),
            // The owner of the tokens, which must also be
            // the signer of the message, otherwise this call
            // will fail.
            msg.sender,
            // The packed signature that was the result of signing
            // the EIP712 hash of `permit`.
            signature
        );
    }

    // Return ERC20 tokens deposited by the caller.
    function withdrawERC20(IERC20 token, uint256 amount) external nonReentrant {
        tokenBalancesByUser[msg.sender][token] -= amount;
        // TODO: In production, use an ERC20 compatibility library to
        // execute thie transfer to support non-compliant tokens.
        token.transfer(msg.sender, amount);
    }

    function _toTokenPermissionsArray(IERC20[] calldata tokens, uint256[] calldata amounts)
        private pure returns (IPermit2.TokenPermissions[] memory permissions)
    {
        permissions = new IPermit2.TokenPermissions[](tokens.length);
        for (uint256 i; i < permissions.length; ++i) {
            permissions[i] = IPermit2.TokenPermissions({ token: tokens[i], amount: amounts[i] });
        }
    }
}