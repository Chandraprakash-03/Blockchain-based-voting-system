const { ethers } = require("hardhat")

async function main() {
    const Ballot = await ethers.getContractFactory("3_Ballot")
    const proposalNames = ["Proposal 1", "Proposal 2", "Proposal 3"].map(
        (name) => ethers.encodeBytes32String(name)
    )

    const ballot = await Ballot.deploy(proposalNames)
    await ballot.waitForDeployment()

    console.log("Ballot deployed to:", await ballot.getAddress())
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
