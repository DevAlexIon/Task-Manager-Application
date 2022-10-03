import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-filename-extension, react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
