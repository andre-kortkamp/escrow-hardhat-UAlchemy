require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
 networks: {
    hardhat: {
    	localhost: {
    		url: "http://127.0.0.1:8545/",
    	},
     // forking: {
     //   url: process.env.GOERLI_RPC_URL,
     //   accounts: [process.env.PRIVATE_KEY],
     // },
    },
  },
  settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
};
