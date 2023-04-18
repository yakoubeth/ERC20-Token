require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY;
const infuraProjectID = process.env.INFURA_PROJECT_ID;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    goerli: {
      provider: () => new HDWalletProvider(privateKey, `https://goerli.infura.io/v3/${infuraProjectID}`),
      network_id: 5,
      gas: 8000000,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.5.16",
    },
  },
};
