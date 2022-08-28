import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = '0x1C2031fe17c0aBBb2eB166D57D7C51117326c1E9'
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const {ethereum} = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer)
        } else {
            console.log("Ethereum object doesn't exist!")
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;