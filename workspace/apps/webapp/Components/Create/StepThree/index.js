import { Button, Grid } from '@mui/material';
import { getTokens } from '../../../features/selectTokens';
import { useSelector } from 'react-redux';
import Explore from '../../Common/Explore';
import { getBasketDetails } from '../../../features/basketDetails';
import { useEffect } from 'react';
import { BasketsABI } from '@basketo/contracts';
import { ethers } from 'ethers';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
let contract;

const StepThree = ({ graphData, setDays, setActiveStep, handleGraphdata }) => {
  const { selectedTokens } = useSelector(getTokens);
  const { basketDetails } = useSelector(getBasketDetails);

  useEffect(async () => {
    graphData === null && handleGraphdata();
    const walletSetup = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const balance = await provider.getBalance(account);
      console.log(account);
      const signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, BasketsABI.abi, signer);
    };
    walletSetup();
  }, []);

  const handleCreate = async () => {
    const tokenId = await contract.createBasket('test string');
    console.log(tokenId);
  };

  return (
    <>
      <Explore
        selectedTokens={selectedTokens}
        basketDetails={basketDetails}
        graphData={graphData}
        setDays={setDays}
      />
      <Button
        color="primary"
        variant="contained"
        sx={{ mr: '10px' }}
        onClick={handleCreate}
      >
        Create
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => setActiveStep(1)}
      >
        Back{' '}
      </Button>
    </>
  );
};

export default StepThree;
