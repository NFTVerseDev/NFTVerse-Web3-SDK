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
     * @param {string} xAppToken - App token
     */
    getExternalAssetListByAccount(xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/account/asset/list`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Get fungible tokens amount
     * @param {BlockchainName} blockchainName - Blockchain name
     * @param {string} tokenId - Token ID
     * @param {string} xAppToken - App token
     */
    getFungibleTokenAmount(blockchain: BlockchainName,tokenId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/marketplace/blockchain/{blockchain}/fungibleToken/{tokenId}/account/balance`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },
};

export default FungibleTokenApis;
