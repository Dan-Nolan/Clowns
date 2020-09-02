usePlugin("@nomiclabs/buidler-waffle");
require('dotenv').config();

module.exports = {
  networks: {
    kovan: {
      url: "https://kovan.infura.io/v3/1a7bd32d1ba74c4c96cc4926e56c0ba6",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solc: {
    version: "0.6.8",
  },
};
