/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Asset, ERC20AssetInterface } from "../ERC20Asset";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022e4380380620022e4833981810160405281019062000037919062000579565b8181816003908051906020019062000051929190620002c7565b5080600490805190602001906200006a929190620002c7565b5050506200008d62000081620000a760201b60201c565b620000af60201b60201c565b6200009e836200017560201b60201c565b50505062000793565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001856200020c60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620001f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001ef906200069a565b60405180910390fd5b6200020981620000af60201b60201c565b50565b6200021c620000a760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002426200029d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200029b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000292906200070c565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620002d5906200075d565b90600052602060002090601f016020900481019282620002f9576000855562000345565b82601f106200031457805160ff191683800117855562000345565b8280016001018555821562000345579182015b828111156200034457825182559160200191906001019062000327565b5b50905062000354919062000358565b5090565b5b808211156200037357600081600090555060010162000359565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003b8826200038b565b9050919050565b620003ca81620003ab565b8114620003d657600080fd5b50565b600081519050620003ea81620003bf565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200044582620003fa565b810181811067ffffffffffffffff821117156200046757620004666200040b565b5b80604052505050565b60006200047c62000377565b90506200048a82826200043a565b919050565b600067ffffffffffffffff821115620004ad57620004ac6200040b565b5b620004b882620003fa565b9050602081019050919050565b60005b83811015620004e5578082015181840152602081019050620004c8565b83811115620004f5576000848401525b50505050565b6000620005126200050c846200048f565b62000470565b905082815260208101848484011115620005315762000530620003f5565b5b6200053e848285620004c5565b509392505050565b600082601f8301126200055e576200055d620003f0565b5b815162000570848260208601620004fb565b91505092915050565b60008060006060848603121562000595576200059462000381565b5b6000620005a586828701620003d9565b935050602084015167ffffffffffffffff811115620005c957620005c862000386565b5b620005d78682870162000546565b925050604084015167ffffffffffffffff811115620005fb57620005fa62000386565b5b620006098682870162000546565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200068260268362000613565b91506200068f8262000624565b604082019050919050565b60006020820190508181036000830152620006b58162000673565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620006f460208362000613565b91506200070182620006bc565b602082019050919050565b600060208201905081810360008301526200072781620006e5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200077657607f821691505b602082108114156200078d576200078c6200072e565b5b50919050565b611b4180620007a36000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b8063715018a61461023b5780638da5cb5b1461024557806395d89b41146102635780639dc29fac1461028157610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef57806370a082311461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a9190611143565b60405180910390f35b61013d600480360381019061013891906111fe565b6103db565b60405161014a9190611259565b60405180910390f35b61015b6103fe565b6040516101689190611283565b60405180910390f35b61018b6004803603810190610186919061129e565b610408565b6040516101989190611259565b60405180910390f35b6101a9610437565b6040516101b6919061130d565b60405180910390f35b6101d960048036038101906101d491906111fe565b610440565b6040516101e69190611259565b60405180910390f35b610209600480360381019061020491906111fe565b610477565b005b61022560048036038101906102209190611328565b61048d565b6040516102329190611283565b60405180910390f35b6102436104d5565b005b61024d6104e9565b60405161025a9190611364565b60405180910390f35b61026b610513565b6040516102789190611143565b60405180910390f35b61029b600480360381019061029691906111fe565b6105a5565b005b6102b760048036038101906102b291906111fe565b6105bb565b6040516102c49190611259565b60405180910390f35b6102e760048036038101906102e291906111fe565b610632565b6040516102f49190611259565b60405180910390f35b6103176004803603810190610312919061137f565b610655565b6040516103249190611283565b60405180910390f35b61034760048036038101906103429190611328565b6106dc565b005b606060038054610358906113ee565b80601f0160208091040260200160405190810160405280929190818152602001828054610384906113ee565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000806103e6610760565b90506103f3818585610768565b600191505092915050565b6000600254905090565b600080610413610760565b9050610420858285610933565b61042b8585856109bf565b60019150509392505050565b60006012905090565b60008061044b610760565b905061046c81858561045d8589610655565b610467919061144f565b610768565b600191505092915050565b61047f610c37565b6104898282610cb5565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104dd610c37565b6104e76000610e0c565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610522906113ee565b80601f016020809104026020016040519081016040528092919081815260200182805461054e906113ee565b801561059b5780601f106105705761010080835404028352916020019161059b565b820191906000526020600020905b81548152906001019060200180831161057e57829003601f168201915b5050505050905090565b6105ad610c37565b6105b78282610ed2565b5050565b6000806105c6610760565b905060006105d48286610655565b905083811015610619576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061090611517565b60405180910390fd5b6106268286868403610768565b60019250505092915050565b60008061063d610760565b905061064a8185856109bf565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106e4610c37565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074b906115a9565b60405180910390fd5b61075d81610e0c565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf9061163b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f906116cd565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109269190611283565b60405180910390a3505050565b600061093f8484610655565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109b957818110156109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611739565b60405180910390fd5b6109b88484848403610768565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a26906117cb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a969061185d565b60405180910390fd5b610aaa8383836110a0565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b27906118ef565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c1e9190611283565b60405180910390a3610c318484846110a5565b50505050565b610c3f610760565b73ffffffffffffffffffffffffffffffffffffffff16610c5d6104e9565b73ffffffffffffffffffffffffffffffffffffffff1614610cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caa9061195b565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1c906119c7565b60405180910390fd5b610d31600083836110a0565b8060026000828254610d43919061144f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610df49190611283565b60405180910390a3610e08600083836110a5565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3990611a59565b60405180910390fd5b610f4e826000836110a0565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610fd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcb90611aeb565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110879190611283565b60405180910390a361109b836000846110a5565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110e45780820151818401526020810190506110c9565b838111156110f3576000848401525b50505050565b6000601f19601f8301169050919050565b6000611115826110aa565b61111f81856110b5565b935061112f8185602086016110c6565b611138816110f9565b840191505092915050565b6000602082019050818103600083015261115d818461110a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111958261116a565b9050919050565b6111a58161118a565b81146111b057600080fd5b50565b6000813590506111c28161119c565b92915050565b6000819050919050565b6111db816111c8565b81146111e657600080fd5b50565b6000813590506111f8816111d2565b92915050565b6000806040838503121561121557611214611165565b5b6000611223858286016111b3565b9250506020611234858286016111e9565b9150509250929050565b60008115159050919050565b6112538161123e565b82525050565b600060208201905061126e600083018461124a565b92915050565b61127d816111c8565b82525050565b60006020820190506112986000830184611274565b92915050565b6000806000606084860312156112b7576112b6611165565b5b60006112c5868287016111b3565b93505060206112d6868287016111b3565b92505060406112e7868287016111e9565b9150509250925092565b600060ff82169050919050565b611307816112f1565b82525050565b600060208201905061132260008301846112fe565b92915050565b60006020828403121561133e5761133d611165565b5b600061134c848285016111b3565b91505092915050565b61135e8161118a565b82525050565b60006020820190506113796000830184611355565b92915050565b6000806040838503121561139657611395611165565b5b60006113a4858286016111b3565b92505060206113b5858286016111b3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061140657607f821691505b6020821081141561141a576114196113bf565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061145a826111c8565b9150611465836111c8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561149a57611499611420565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006115016025836110b5565b915061150c826114a5565b604082019050919050565b60006020820190508181036000830152611530816114f4565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115936026836110b5565b915061159e82611537565b604082019050919050565b600060208201905081810360008301526115c281611586565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116256024836110b5565b9150611630826115c9565b604082019050919050565b6000602082019050818103600083015261165481611618565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006116b76022836110b5565b91506116c28261165b565b604082019050919050565b600060208201905081810360008301526116e6816116aa565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611723601d836110b5565b915061172e826116ed565b602082019050919050565b6000602082019050818103600083015261175281611716565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006117b56025836110b5565b91506117c082611759565b604082019050919050565b600060208201905081810360008301526117e4816117a8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118476023836110b5565b9150611852826117eb565b604082019050919050565b600060208201905081810360008301526118768161183a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006118d96026836110b5565b91506118e48261187d565b604082019050919050565b60006020820190508181036000830152611908816118cc565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119456020836110b5565b91506119508261190f565b602082019050919050565b6000602082019050818103600083015261197481611938565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006119b1601f836110b5565b91506119bc8261197b565b602082019050919050565b600060208201905081810360008301526119e0816119a4565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a436021836110b5565b9150611a4e826119e7565b604082019050919050565b60006020820190508181036000830152611a7281611a36565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad56022836110b5565b9150611ae082611a79565b604082019050919050565b60006020820190508181036000830152611b0481611ac8565b905091905056fea26469706673582212208031bc48b8f1664503ecdd464cd5703026840c88c15ed965125286964b6dc3ea64736f6c63430008090033";

type ERC20AssetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AssetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Asset__factory extends ContractFactory {
  constructor(...args: ERC20AssetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialOwner: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ERC20Asset> {
    return super.deploy(
      initialOwner,
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20Asset>;
  }
  override getDeployTransaction(
    initialOwner: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialOwner,
      name,
      symbol,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Asset {
    return super.attach(address) as ERC20Asset;
  }
  override connect(signer: Signer): ERC20Asset__factory {
    return super.connect(signer) as ERC20Asset__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AssetInterface {
    return new utils.Interface(_abi) as ERC20AssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Asset {
    return new Contract(address, _abi, signerOrProvider) as ERC20Asset;
  }
}