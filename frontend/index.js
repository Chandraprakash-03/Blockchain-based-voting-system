import { ethers } from "../frontend/dependencies/ethers.min.js";
import { abi, contractAddress } from "../frontend/dependencies/constants.js";

console.log("index.js loaded");

// Connect to MetaMask
async function connectMetaMask() {
    try {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to use this feature!');
            return;
        }

        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length === 0) {
            alert('No accounts found. Please check your MetaMask settings.');
            return;
        }

        const account = accounts[0];
        console.log('Connected account:', account);

        // Store the account in localStorage to retrieve it on other pages
        localStorage.setItem('connectedAccount', account);

        // Redirect to vote page after successful connection
        window.location.href = 'vote.html';
    } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('Failed to connect to MetaMask. Please try again. Error: ' + error.message);
    }
}

async function getWinner() {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const winner = await contract.winnerName();
        console.log("Current winner:", winner.toString());
    } catch (error) {
        console.error("Error getting the winner:", error);
        alert("Failed to retrieve the winner. Please try again. Error: " + error.message);
    }
}

async function vote(proposalId) {
    try {
        if (!window.ethereum) {
            alert("MetaMask is not installed!");
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        // Validate proposalId
        const proposalsCount = await contract.proposalsCount(); // Assuming you have a function to get proposals count
        if (proposalId < 0 || proposalId >= proposalsCount) {
            throw new Error("Invalid proposal ID.");
        }

        const transaction = await contract.vote(proposalId);
        console.log("Transaction sent:", transaction);

        const receipt = await transaction.wait();
        console.log("Transaction mined:", receipt);

        alert(`Vote successful for proposal ${proposalId}!`);
    } catch (error) {
        console.error("Error during voting:", error);
        alert("An error occurred during voting. Please try again. Error: " + error.message);
    }
}

export { connectMetaMask, vote, getWinner };
