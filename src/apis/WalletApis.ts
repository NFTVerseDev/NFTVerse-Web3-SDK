import axios from 'axios';
import { CustodianWalletUser, TESTNET_URL, WalletUser } from '../common';

const WalletApis = {
    /**
     * Get or setup wallet of user
     * @param {WalletUser} walletUser - Wallet user
     * @param {string} xAppToken - App token
     */
    getOrSetupWallet(walletUser: WalletUser, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/user/wallet`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: walletUser,
        });
    },

    /**
     * Create custodian wallet user
     * @param {CustodianWalletUser} custodianWalletUser - Custodian wallet user
     * @param {string} xAppToken - App token
     */
    createCustodianWalletUser(custodianWalletUser: CustodianWalletUser, xAppToken: string): Promise<any> {
        return axios({
            url: `${TESTNET_URL}/external/custodian/wallet/user/create`,
            headers: {
                'X-App-Token': xAppToken,
                'Content-Type': 'application/json',
            },
            method: 'post',
            data: custodianWalletUser,
        });
    },
};

export default WalletApis;
