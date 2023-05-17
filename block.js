import { GENESIS_DATA } from "./config";
class Block{
    constructor({ timestamp, prevHash, hash, data, nonce, difficulty }) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    
    /*
    *Genesis block is knwon as the 1st block and created this static function cz we need one genesis block only. Not always when we create a block Object.
    */
    static genesis() {
        return new this(GENESIS_DATA);
    }
}



const block1 = new Block({
    hash: "0xacb",
    timestamp: "2/09/22",
    prevHash: "0xc12",
    data: "hello",
});

console.log(block1);