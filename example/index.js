import {NFTApis} from '@nftverse/web3-sdk'
// const {NFTApis} = require('@nftverse/web3-sdk')

NFTApis.getExternalAssetDetails(21, 'E9FF56D9-FC53-480F-9DC6-D26A7DE233A0')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('Done')
    })