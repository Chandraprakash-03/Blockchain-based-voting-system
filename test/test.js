const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Ballot", function () {
    let ballot
    let owner
    let addr1
    let addr2
    let proposalNames = ["Proposal 1", "Proposal 2", "Proposal 3"].map(
        (name) => {
            ethers.encodeBytes32String(name)
        }
    )
    beforeEach(async function () {
        ;[owner, addr1, addr2] = await ethers.getSigners()
        const Ballot = await ethers.getContractFactory("3_Ballot")
        ballot = await Ballot.deploy(proposalNames)
    })
    it("Should set the right chairperson", async function () {
        expect(await ballot.chairperson()).to.equal(owner.address)
    })
    it("should allow chairperson to give the right to vote", async function () {
        await ballot.giveRightToVote(addr1.address)
        const voter = await ballot.voters(addr1.address)
        expect(voter.weight).to.equal(1)
    })
    it("should allow voting", async function () {
        await ballot.giveRightToVote(addr1.address)
        await ballot.connect(addr1).vote(1)
        const proposal = await ballot.proposals(1)
        expect(proposal.voteCount).to.equal(1)
    })
})
