require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/QIkod8Zr-v6KFue2iqQu6bu4xZiOsM4U",
			accounts: [
				"1394caec971eb0e8a3618e746bd1713ed68afe304781b0659427fb8c4d22ca40",
			],
		},
	},
};
