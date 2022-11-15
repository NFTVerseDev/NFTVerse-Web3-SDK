import axios from 'axios';
import { BlockchainName, FungibleToken, TESTNET_URL } from '../common';

const FungibleTokenApis = {
    /**
     * Transfer fungible tokens
     * @param {FungibleToken} fungibleToken - Fungible token
     * @param {string} xAppToken - App token
     */
    transferFungibleToken(fungibleToken: FungibleToken, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/fungibleToken/transfer`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: fungibleToken,
        });
    },

    /**
     * Get fungible tokens details as list
     * @param {BlockchainName} blockchainName - Blockchain name
     * @param {number} tokenId - Token ID
     * @param {string} xAppToken - App token
     */
    getFungibleTokenDetailList(blockchainName: BlockchainName, tokenId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/blockchain/${blockchainName}/fungibleToken/${tokenId}/asset/list`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Get fungible tokens amount
     * @param {number} tokenId - Token ID
     * @param {string} xAppToken - App token
     */
    getFungibleTokenAmount(tokenId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/fungibleToken/${tokenId}/account/detail`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Get fungible tokens details
     * @param {number} assetId - Asset ID
     * @param {number} address - Address of User
     * @param {string} xAppToken - App token
     */
    getFungibleTokenDetail(assetId: number, address: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/asset/${assetId}/address/${address}/detail`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },
};

export default FungibleTokenApis;
