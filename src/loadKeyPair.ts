import "dotenv/config";

import {getKeypairFromEnvironment} from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(keypair);
console.log("We have loaded the secret key securley");