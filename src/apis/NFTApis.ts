import axios from 'axios';
import { BlockchainName, NFTBody, NFTFileType, NFTForSale, NFTMiningStatus, NFTTransfer, TESTNET_URL } from '../common';

const NFTApis = {
    /**
     * Get external asset by ID
     * @param {number} externalAssetId - Asset ID
     * @param {string} xAppToken - App token
     */
    getExternalAssetDetails(externalAssetId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/asset/${externalAssetId}`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Get all/listed/unlisted NFTs
     * @param {string} [type=all] - NFT type (listed/unlisted/all)
     * @param {string} [isSold=null] - NFT isSold (true/false)
     * @param {string} xAppToken - App token
     */
    getAllNFTs(type: NFTMiningStatus = 'all', xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/nft/list?type=${type}`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Get NFT by ID
     * @param {number} nftId - NFT ID
     * @param {string} xAppToken - App Token
     */
    getNFTById(nftId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/nft/nftId/${nftId}`,
            headers: {
                'X-App-Token': xAppToken,
            },
            method: 'get',
        });
    },

    /**
     * Upload asset
     * @param {FormData} asset - Asset data
     * @param {string} fileType - File type
     * @param {string} externalAssetId - Asset ID
     * @param {string} xAppToken - App token
     */
    uploadAsset(asset: FormData, fileType: NFTFileType, externalAssetId: number, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/asset/upload?type=${fileType}&externalAssetId=${externalAssetId}`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'multipart/form-data',
            },
            method: 'post',
            data: asset,
        });
    },

    /**
     * Mint and transfer NFT
     * @param {NFTBody} nft - NFT data
     * @param {string} xAppToken - App token
     */
    mintAndTransferNFT(nft: NFTBody, xAppToken: string): Promise<any> {
        nft.description = nft.description || '';
        nft.image = nft.image || '';
        nft.properties = nft.properties || [];

        return axios({
            url: `${TESTNET_URL}/external/nft/mintAndTransfer`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: nft,
        });
    },

    // /**
    //  * Mint NFT
    //  * @param {NFTBody} nft - NFT data
    //  * @param {number} userId - User ID
    //  * @param {BlockchainName} blockchain - Blockchain name
    //  * @param {string} xAppToken - App token
    //  */
    // mintNFT(nft: NFTBody, userId: number, blockchain: BlockchainName, xAppToken: string): Promise<any> {
    //     nft.description = nft.description || '';
    //     nft.mediaUrl = nft.mediaUrl || '';
    //     nft.properties = nft.properties || [];

    //     return axios({
    //         url: `${TESTNET_URL}/external/marketplace/user/${userId}/blockchain/${blockchain}/nft/mint`,
    //         headers: {
    //             'X-App-Token': xAppToken,
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'post',
    //         data: nft,
    //     });
    // },

    /**
     * Transfer NFT
     * @param {NFTTransfer} nftTransfer - NFT data
     * @param {string} xAppToken - App token
     */
    transferNFT(nftTransfer: NFTTransfer, xAppToken: string): Promise<any> {

        return axios({
            url: `${TESTNET_URL}/external/nft/transfer`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: nftTransfer,
        });
    },

    /**
     * List NFT for sale
     * @param {NFTForSale} nft - NFT data
     * @param {string} xAppToken - App token
     */
    listNFTForSale(nft: NFTForSale, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/nft/sale`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: nft,
        });
    },
};

export default NFTApis;
