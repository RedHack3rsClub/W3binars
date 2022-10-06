const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

// Whitelisted addresses
const whitelisted = [
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"
];

const leafNodes = whitelisted.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sort: true });
// console.log(leafNodes);
// console.log(merkleTree);
const merkleRoot = merkleTree.getRoot();
const merkleRoot2 = merkleTree.getHexRoot();
console.log('whitelist merkle tree\n', merkleTree.toString());
console.log('root hash: ', merkleRoot)
console.log('root hash hex: ', merkleRoot2)


// CLIENT SIDE 
const claimingAddress = keccak256("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2");
// console.log(claimingAddress)


// beware of addresses or their hashes not matching due to case sensitivity
// 'getHexProof' returns the neighbor leaf and all parent nodes' hashes that will be required to derive the merkle tree's root hash
// The computation for hexProof has to be outsourced to the dapp or done manually by the minter bc it's expensive to do it on-chain
const hexProof = merkleTree.getHexProof(claimingAddress);
console.log(hexProof); // if hexProof length>0, then address is valid. This array shows path of all sister and parent nodes for a leaf to reach the root
console.log(merkleTree.verify(hexProof, claimingAddress, merkleRoot));

[
    "0xd01f7f1130cd76674aa5de088ae3f127d431228785ba80cfd38ba829672e0988"     
  ]

  [ "0xd01f7f1130cd76674aa5de088ae3f127d431228785ba80cfd38ba829672e0988" ]