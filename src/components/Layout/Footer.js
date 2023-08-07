import Image from 'next/image';

import ColorModeToggler from "../ColorModeToggler/ColorModeToggler";
import Sponsors from "@/components/Sponsors/Sponsors";

import lettersLogo from '../../images/shiftid-logo-just-letters.jpg';

import classes from './Layout.module.scss';

const Footer = () => {
  // const router = useRouter();

  return (
    <section className={classes.Footer}>
      <Sponsors/>
      <hr />
      {/*<RegisterCTA/>*/}
      {/*<hr/>*/}
      {/*/>*/}
      <Image src={lettersLogo}
             alt={'SHIFTID logo'}
             className={`img-fluid ${classes.Image}`}
      />
      <p className={'d-flex justify-content-center align-items-center ps-2'}>
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
        <ColorModeToggler className={`d-inline-block ms-auto`} />
      </p>
    </section>
  );
}

export default Footer;
