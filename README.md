# Vote Rigt - Decentralized Voting Application

A blockchain-based voting system built with Solidity and Ethereum, featuring a clean and intuitive web interface for transparent and secure voting.

## Features

- **Secure Voting**: Each eligible voter can vote only once
- **Chairperson Controls**: Special administrative privileges for the voting chairperson
- **Real-time Updates**: Live winner tracking and vote counting
- **MetaMask Integration**: Seamless wallet connection for transaction signing
- **Timer System**: Automated voting period management with countdown
- **Responsive UI**: Clean and user-friendly interface

## Technology Stack

- **Smart Contracts**: Solidity 0.8.24
- **Frontend**: HTML, CSS, JavaScript
- **Blockchain Interaction**: ethers.js
- **Development Environment**: Hardhat
- **Testing**: Mocha & Chai
- **Network Support**: Ethereum (Sepolia testnet & local network)

## Smart Contracts

The project contains three main smart contracts:

- **Ballot.sol**: Main voting logic implementation
  - Voter management
  - Proposal handling
  - Vote delegation
  - Winner determination

- **Owner.sol**: Contract ownership management

- **Storage.sol**: Basic storage functionality

## Getting Started

### Prerequisites

- Node.js
- MetaMask wallet
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Chandraprakash-03/Blockchain-based-voting-system.git
   cd Blockchain-based-voting-system
   ```

2. Install Dependencies:
    ```bash
    npm install 
    ```

3. Configure environment variables: 
    ```bash
    cp .env.example .env
    ```
4. Add your configuration in the `.env` file:
    ```
    MAINNET_RPC_URL = your_mainnet_rpc_url_here
    COINMARKETCAP_API_KEY = your_coinmarketcap_api_key_here
    ETHERSCAN_API_KEY = your_etherscan_api_key_here
    SEPOLIA_RPC_URL = your_sepolia_rpc_url_here
    PRIVATE_KEY = your_wallet_private_key_here 
    ```

## Running Tests
```bash
npx hardhat test
```

## Local Deployment
1. Start local Hardhat network:
    ```bash
    npx hardhat node
    ```
2. Deploy contracts:
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```

## Frontend Setup
1. Open the frontend directory:
    ```bash
    cd frontend
    ```
2. Serve the HTML files using a local server:
    ```bash
    npm install -g http-server
    http-server
    ```
    or 
    ```bash 
    python -m http.server 3000
    ```
3. Connect MetaMask to the appropriate network
4. Access the application through your web browser

## Usage 

1. ### Connect Wallet 
    - Click "Connect Wallet" on the landing page
    - Approve MetaMask connection
2. ### Chairperson Functions
    - Give voting rights to addresses
    - Monitor voting progress
3. ### Voting 
    - Select a proposal
    - Confirm transaction through MetaMask
4. ### Results 
    - View real-time winner updates
    - Final results displayed after timer ends

## Testing
The project includes comprehensive tests covering:
- Chairperson assignment
- Voting rights management
- Vote casting functionality 
- Winner determination

Run tests with:
    ``` bash
    npx hardhat test
    ```

## Network Configuration
### Supported Networks
- Hardhat Local (Chain ID: 31337)
- Sepolia Testnet (Chain ID: 11155111)

## Contributing 
1. Fork the repository
2. Create your feature:
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Added some AmazingFeature'
    ```
4. Push to the branch:
    ```bash 
    git push origin feature/AmazingFeature
    ```
5. Open a pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgements 
- OpenZeppelin for smart contract standards
- Hardhat development environment
- ether.js library