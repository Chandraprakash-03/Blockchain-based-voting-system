const networkConfig = {
    11155111: {
        name: "sepolia",
        callbackGasLimit: "5000000",
        interval: "30",
    },
    31337: {
        name: "hardhat",
        callbackGasLimit: "5000000",
        interval: "30",
    },
}
const developmentChains = ["hardhat", "localhost"]

module.exports = {
    developmentChains,
    networkConfig,
}
