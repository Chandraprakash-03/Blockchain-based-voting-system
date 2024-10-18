import { ethers } from "../frontend/dependencies/ethers.min.js"
import { abi, contractAddress } from "../frontend/dependencies/constants.js"

let connectButton = document.getElementById("connectButton")
let initializeButton = document.getElementById("initialize")
let voteButton1 = document.getElementById("voteButton1")
connectButton.onclick = connectMetaMask
initializeButton.onclick = getWinner

// async function connect() {
//     if (typeof window.ethereum !== undefined) {
//         try {
//             await window.ethereum.request({
//                 method: "eth_requestAccounts",
//             })
//         } catch (error) {
//             console.error(error)
//         }
//         connectButton.innerHTML = "Connected"
//         console.log("Connected")
//         console.log(window.ethereum.accounts)
//     } else {
//         connectButton.innerHTML = "Not Connected"
//     }
// }
async function connectMetaMask() {
    try {
        // Request account access if needed
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        })

        // Fetch the first account (if multiple accounts, you get the first one in the array)
        const account = accounts[0]
        console.log("Connected account:", account)
    } catch (error) {
        console.error("Error connecting to MetaMask:", error)
    }
}

async function getWinner() {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const winner = await contract.winnerName()
        console.log("Current winner", winner.toString())
    } catch (error) {
        console.error("Error initializing Contract", error)
    }
}

async function vote(proposalIndex) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    try {
        if (!provider || !signer || !contract) {
            console.log("Contract not initialized")
            return
        }
        const confirmation = confirm(
            "Are you sure you want to vote this candidate"
        )
        if (!confirmation) {
            return
        }

        const voteTx = await contract.vote(proposalIndex)
        alert("awaiting for confirmation...")

        await voteTx.wait()
        alert("Vote casted successfully")
    } catch (error) {
        console.error(error)
    }
}
