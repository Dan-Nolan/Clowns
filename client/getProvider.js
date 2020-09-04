import {ethers} from 'ethers';

let provider;
async function getProvider() {
    if(provider) {
        return provider;
    }
    await ethereum.request({ method: 'eth_requestAccounts' });
    return new ethers.providers.Web3Provider(ethereum);
}

export default getProvider;
