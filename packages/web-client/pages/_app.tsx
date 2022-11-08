import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);
  return isBrowser ? (
    <div suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  ) : null;
}

export default App;
