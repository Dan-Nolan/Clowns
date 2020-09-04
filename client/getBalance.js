import getProvider from './getProvider';
import {ethers} from 'ethers';
import {abi} from './artifacts/ClownToken';
import {address} from './config';

async function getBalance() {
  const provider = await getProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);

  const balance = await contract.balanceOf(await signer.getAddress());
  const name = await contract.name();
  const balanceFormatted = ethers.utils.formatEther(balance);
  document.getElementById("balance").innerHTML = `You have ${balanceFormatted} ${name}`;
}

export default getBalance;
