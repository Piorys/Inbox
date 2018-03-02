const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require ('web3');
const {interface, bytecode} = require('./compile');

//Passing account mnemonic and link to infura API
const provider = new HDWalletProvider(
  'add mnemonic here',
  'add API address with API key'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
const accounts = await web3.eth.getAccounts();
console.log('Attempting to deploy from account: ',accounts[0]);

result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hi there!']})
  .send({gas:'1000000',from: accounts[0]})
console.log('Contract deployed to: '+result.options.address);
};
deploy();
