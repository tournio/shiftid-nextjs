import Image from 'next/image';

import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import Sponsors from "@/components/Sponsors/Sponsors";

import fireworksLogo from '../../images/logo-fireworks.png';

import classes from './Layout.module.scss';

const Footer = () => {
  return (
    <section className={classes.Footer}>
      <Sponsors/>
      <hr />
      <div className={`row d-flex justify-content-center`}>
        <div className={`col-12 col-md-8`}>
          <Image src={fireworksLogo}
                 alt={'Seniors Handicap Invitational Family Tournament in DFW'}
                 className={`img-fluid ${classes.Image}`}
          />
        </div>
      </div>
      <div className={'d-flex justify-content-center align-items-center ps-2'}>
        <p>
          <span>
            &copy; 2023-2025&nbsp;
          </span>
          <span className={'d-md-none pe-2'}>
            SHIFTID
          </span>
          <span className={'d-none d-md-inline pe-2'}>
            Seniors Handicap Invitational Family Tournament in DFW
          </span>
          <a href={'https://www.facebook.com/profile.php?id=100090483829360'}
             className={'ps-2'}>
            <i className={'bi bi-facebook'} aria-hidden={true}/>
            <span className={'visually-hidden'}>
              SHIFTID on Facebook
            </span>
          </a>
        </p>
        <ColorModeToggler className={`d-inline-block ms-auto`}/>
      </div>
    </section>
  );
}

export default Footer;
