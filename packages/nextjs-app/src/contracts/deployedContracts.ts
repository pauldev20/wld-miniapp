/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  31337: {
    MockHumanOracle: {
      address: "0xb19b36b1456e65e3a6d514d3f715f204bd59f431",
      abi: [
        {
          type: "function",
          name: "claimRewardForVote",
          inputs: [
            {
              name: "voteId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createVote",
          inputs: [
            {
              name: "question",
              type: "string",
              internalType: "string",
            },
            {
              name: "answers",
              type: "string[]",
              internalType: "string[]",
            },
            {
              name: "startBlock",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "durationInBlocks",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getVotingList",
          inputs: [],
          outputs: [
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "questions",
              type: "string[]",
              internalType: "string[]",
            },
            {
              name: "totalStakes",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "getVotingPage",
          inputs: [
            {
              name: "voteId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "question",
              type: "string",
              internalType: "string",
            },
            {
              name: "answers",
              type: "string[]",
              internalType: "string[]",
            },
            {
              name: "totalStake",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "stakePerAnswer",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "isUserRegistered",
          inputs: [
            {
              name: "userAddr",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "signUpWithWorldId",
          inputs: [
            {
              name: "nullifierHash",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "proof",
              type: "uint256[8]",
              internalType: "uint256[8]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "submitVotingDecisionWithStake",
          inputs: [
            {
              name: "voteId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "answerIndex",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "stake",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "RewardClaimed",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "voteId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "rewardAmount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "UserRegistered",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "nullifierHash",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "createdAtBlock",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "VoteCreated",
          inputs: [
            {
              name: "voteId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "question",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "startBlock",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "durationInBlocks",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "VoteSubmitted",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "voteId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "answerIndex",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "stakeAmount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;
