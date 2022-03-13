import { ChainId } from '@sushiswap/sdk'

import { mainnetTokens } from './data'
import { Token } from './types'

const getTokenData = ({
  chainId,
  tokenAddress,
}: {
  chainId: ChainId
  tokenAddress: string
}): Token | undefined => {
  return mainnetTokens.find(({ address }) => address === tokenAddress.toLowerCase())
}

export default getTokenData
