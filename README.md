# Description

This package aims to reduce the hassle of developers by shipping pre-written code that links your Web3 app to NFTVerse's
external APIs and services.

# Installation

```
npm install @nftverse/web3-sdk
```

# Usage

```
import NFTApis from '@nftverse/web3-sdk'
import WalletApis from '@nftverse/web3-sdk'
import FungibleTokenApis from '@nftverse/web3-sdk'

NFTApis.getExternalAssetDetails(21, 11ewf589-eg1e-12asfd)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('Done')
    })
```

Refer to the official [docs](https://developer.onnftverse.com) for more details.