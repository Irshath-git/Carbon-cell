import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMaskWalletCard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Enable Metamask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);

        // Fetch account balance
        const weiBalance = await web3.eth.getBalance(accounts[0]);
        const etherBalance = web3.utils.fromWei(weiBalance, 'ether');
        setBalance(etherBalance);
      } else {
        alert('Please install MetaMask extension to connect your wallet.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-4 mt-10">
      <h2 className="text-xl font-bold mb-4">MetaMask Wallet</h2>
      {!isConnected ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="mb-2">Connected Account: {account}</p>
          <p className="mb-2">Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default MetaMaskWalletCard;
