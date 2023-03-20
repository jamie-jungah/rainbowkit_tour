import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import type { AppProps } from 'next/app'

// gives us providers of all chains
const { chains, provider } = configureChains(
  [mainnet],
  [publicProvider()]
);

// set up basic wallets (rainbow, coinbase, metamask) and add the wallet connectors
const { connectors } = getDefaultWallets({
  appName: 'Rainbow Kit Demo',
  chains
});

// create the wagmi client
const wagmiClient = createClient({
  connectors,
  provider
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
