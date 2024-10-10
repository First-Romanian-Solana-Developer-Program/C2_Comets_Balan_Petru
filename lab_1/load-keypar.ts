import dotenv from 'dotenv'
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Public key:", keypair.publicKey.toBase58());