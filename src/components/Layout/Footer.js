// import {useRouter} from "next/router";

import ColorModeToggler from "../ColorModeToggler/Component";

import classes from './Layout.module.scss';

const Footer = () => {
  // const router = useRouter();

  return (
    <div className={classes.Footer}>
      {/*<Sponsors/>*/}
      {/*<hr />*/}
      {/*<RegisterCTA/>*/}
      {/*<hr/>*/}
      {/*<Image src={logo}*/}
      {/*       alt={'DAMIT logo'}*/}
      {/*       className={`img-fluid footer-image`}*/}
      {/*/>*/}
      <p className={'d-flex justify-content-center'}>
        <span>
          &copy; 2023&nbsp;
        </span>
        <span className={'d-md-none pe-2'}>
          SHIFTID
        </span>
        <span className={'d-none d-md-inline pe-2'}>
          Seniors Handicap Invitational Fall Tournament in DFW
        </span>
        <span className={`d-inline-block`}>
          <a href={'https://www.facebook.com/profile.php?id=100090483829360'}
             className={'ps-2'}>
            <i className={'bi bi-facebook'} aria-hidden={true} />
            <span className={'visually-hidden'}>
              SHIFTID on Facebook
            </span>
          </a>
        </span>
      </p>
      <ColorModeToggler className={`d-inline-block mt-1 mb-0 py-1`} />
    </div>
  );
}

export default Footer;
