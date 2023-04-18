# ERC20-Token
 an ERC-20 Token smart contract, and a dapp to interact with your contract (claim, transfer and show connected wallet balance)
 
ERC20-Token is an implementation of a standard ERC20 token on the Ethereum blockchain. The ERC20 standard defines a set of rules and interfaces that a token contract must implement to be able to interact with other contracts and wallets that support the standard.

Getting Started
To get started with ERC20-Token, you'll need to have a working Ethereum development environment set up on your local machine. You can use tools like Truffle and Ganache to set up a local blockchain network and deploy and test the contract.

Once you have a working development environment set up, you can clone the ERC20-Token repository and compile and deploy the contract using the following commands:

''' git clone https://github.com/yakoubeth/ERC20-Token.git
cd ERC20-Token
truffle compile
truffle migrate '''

This will compile the contract and deploy it to your local blockchain network.

Usage
Once you have deployed the contract, you can interact with it using any Ethereum wallet or contract that supports the ERC20 standard. The contract provides the following functions:

balanceOf(address account): returns the balance of the specified account
transfer(address recipient, uint256 amount): transfers the specified amount of tokens from the sender's account to the recipient's account
allowance(address owner, address spender): returns the amount of tokens that the spender is allowed to withdraw from the owner's account
approve(address spender, uint256 amount): allows the spender to withdraw the specified amount of tokens from the sender's account
transferFrom(address sender, address recipient, uint256 amount): transfers the specified amount of tokens from the sender's account to the recipient's account, if the sender has approved the spender to withdraw that amount
Contributing
If you would like to contribute to ERC20-Token, please submit a pull request with your changes. Before submitting a pull request, please make sure that your changes are well-tested and conform to the existing code style and conventions.
