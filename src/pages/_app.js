import {useEffect} from "react";

import '@/styles/shiftid.scss';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
