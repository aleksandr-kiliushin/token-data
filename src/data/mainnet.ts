import { ChainId } from '@sushiswap/sdk'

import { Token } from '../types'

const mainnetAssetsPath =
  'https://raw.githubusercontent.com/aleksandr-kiliushin/token-data-shipper/master/assets/mainnet-tokens'

const mainnetTokens: Token[] = [
  {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/dai.svg',
    name: 'DAI',
  },
  {
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/eth.svg',
    name: 'ETH',
  },
  {
    address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  {
    address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  {
    address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/stake-ether.svg',
    name: 'stETH',
  },
  {
    address: '0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/tribe.svg',
    name: 'Tribe',
  },
  {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/usdc.svg',
    name: 'USDC',
  },
  {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/usdt.svg',
    name: 'USDT',
  },
  {
    chainId: ChainId.MAINNET,
    address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    logoUrl: mainnetAssetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chainId: ChainId.MAINNET,
    logoUrl: mainnetAssetsPath + '/weth.svg',
    name: 'WETH',
  },
  // {
  //   address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  //   name: 'UNISWAP_ROUTER_V2',
  // },
  // {
  //   address: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  //   name: 'SUSHISWAP_ROUTER',
  // },
  // {
  //   address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
  //   name: 'THREE_CRV',
  // },
  // {
  //   address: '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7',
  //   name: 'CURVE_3CRV_POOL',
  // },
  // {
  //   address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  //   name: 'WBTC',
  // },
  // {
  //   address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
  //   name: 'REN_CRV',
  // },
  // {
  //   address: '0x2aECCB42482cc64E087b6D2e5Da39f5A7A7001f8',
  //   name: 'RULER',
  // },
  // {
  //   address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
  //   name: 'CVX',
  // },
  // {
  //   address: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
  //   name: 'PICKLE',
  // },
  // {
  //   address: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
  //   name: 'ALCX',
  // },
  // {
  //   address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  //   name: 'SUSHI',
  // },
  // {
  //   address: '0x9928e4046d7c6513326cCeA028cD3e7a91c7590A',
  //   name: 'UNI_FEI_TRIBE_LP',
  // },
  // {
  //   address: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
  //   name: 'CURVE_REN_CRV_POOL',
  // },
  // {
  //   address: '0x06325440D014e39736583c165C2963BA99fAf14E',
  //   name: 'STE_CRV',
  // },
  // {
  //   address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  //   name: 'REN_BTC',
  // },
]

export default mainnetTokens
