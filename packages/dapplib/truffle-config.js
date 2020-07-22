require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pave coin gesture help flush genre'; 
let testAccounts = [
"0x864ba7dd896758ee543fc1ad6ec6bcb81c86c07c7725b378fdbe183b9f8412e6",
"0xbe56a7fd0a8987877b1242c26b6383dcb81e0d2a589e6d43a6ed51dc4b682074",
"0x41b3568aef0d0379163df7bdc6ee7b1b49592eddd72c4f7fbff3ca081c7c693f",
"0x8bbf733d7b67403c0974fb0cd1d10e68324d5caa67e85863ccdc02f6aa53ead2",
"0x4100acf4fc8c79de076675ef1f268cd5e7e47720c1bbc0fe6c71b81a1da94dde",
"0x0c684a5ec0a2b93292e7b069aaf40154c2c19be0755c61e0b4be19eb6816469d",
"0x7e0572f1346198b06637ebeff45cd9929bdb52e987bb8530405ac1a96e13fb40",
"0x962442b9745ed8d83fb6996c97d3dcb9580bcbc696b63ee42cb07d9bfe757e11",
"0xbf6a0e9a19ae24e4dbaf0441cb5dec6b8f750f683e3cd1ef3e28b9b26c8e793c",
"0x9c99142e145e0dd271f88d21d8c6e6ea43cc4b8c2bc70d071eaecff1f9eb08e2"
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
            version: '^0.5.11'
        }
    }
};
