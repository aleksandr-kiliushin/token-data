import { ChainId } from '@sushiswap/sdk'

import { Token } from './types'

const getTokenData = ({
  chainId,
  tokenAddress,
}: {
  chainId: ChainId
  tokenAddress: string
}): Token | undefined => {
  return {
    chainId,
    address: tokenAddress,
    logoUrl: '',
  }
}

export default getTokenData
