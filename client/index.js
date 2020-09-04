import "./index.scss";
import getBalance from './getBalance';
import sendTokens from './sendTokens';
import "./sendTokens";

// populate the balance automatically
getBalance();

document.getElementById("send").addEventListener('click', async () => {
  await sendTokens();
  await getBalance();
});
