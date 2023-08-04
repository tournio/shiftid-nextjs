import Head from 'next/head';

export const siteTitle = 'SHIFTID 2023';

const Header = () => (
  <Head>
    <title>{siteTitle}</title>
    <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
    <meta name={"title"} content={siteTitle} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, shrink-to-fit=no user-scalable=no"} />
    <meta name={'description'} content={'SHIFTID is the Seniors Handicap Invitational Fall Tournament in DFW, an IGBO-affiliated bowling tournament.'} />
    <meta name={'twitter:card'} content={'summary_large_image'} />
    <link rel="icon" type="image/x-icon" href="/icon.jpg" />
  </Head>
);

export default Header;
