require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remove evil hunt father flat spray'; 
let testAccounts = [
"0x22a2ba92e681adcaf06290e5fc97a54e9d5853ee5a04a3c7c002affd4b84dc53",
"0xbe7223545fae0205a7ba3e88d79c367195e741a9361894a9cc687d42f0da4c9e",
"0xf9d4fedb078b4013e8f4c74cd9bbea8324af1462df084b77746c787dfabe827c",
"0x2d9954862d933641a45c48304950b39ccedb558d5f61ba0b4a48e7fa2b82c10f",
"0xe13e6a076e5b08f2df53604cffcf169d414a9e3d1f615b23e4506400c1499851",
"0xf5f553ef4407a91b8aad8b2bed7f36d5baba375588e785de2b11dd95a0866b50",
"0xf55cfcfc66c850f4dcb2f082f733f7886c3bb59186c3598ce9d6589569fdd9c9",
"0x7895e59a9e030eadc1bff1d8f7041638721627721944bcf8c74388494315103c",
"0xa0d2f20bcb6159f24ee8c40a4fb5465412040e3aa09f8a3941ed7f79a71ca469",
"0x0eda592df0c6cd1b02a9ef3f21232c20a06d7ae99ea524cc8c8b06c1a6c4cb43"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

