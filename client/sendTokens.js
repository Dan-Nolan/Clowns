import getProvider from './getProvider';
import {ethers} from 'ethers';
import {abi} from './artifacts/ClownToken';
import {address} from './config';

async function sendTokens() {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);

  const amount = document.getElementById("amount").value;
  const recipient = document.getElementById("recipient").value;
  const amountInTokens = ethers.utils.parseEther(amount).toString();
  const tx = await contract.transfer(recipient, amountInTokens);
  await tx.wait();
}

export default sendTokens;
