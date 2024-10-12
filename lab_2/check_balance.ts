import dotenv from 'dotenv'
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { airdropIfRequired } from '@solana-developers/helpers';


dotenv.config();

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`⚡ Connected to devnet`);

const publicKey = new PublicKey("Dww7VgDwWSL3nUNJhhAagCBezDAMvghMUFZnTu9q9sCn");


const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
`� Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);