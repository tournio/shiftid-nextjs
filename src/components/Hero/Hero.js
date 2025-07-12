import Image from "next/image";
import Link from "next/link";
import fireworksLogo from '../../images/logo-fireworks.png';
import {REGISTER_URL} from "@/js/misc";

import classes from './Hero.module.scss';

const Hero = () => {
  const text = 'Seniors Handicap Invitational Family Tournament in DFW';

  return (
    <section className={`${classes.Hero}`}>
      <div className={`row d-flex justify-content-center ${classes.Logo}`}>
        <Image src={fireworksLogo}
               className={`col-11 col-md-10 col-lg-8 img-fluid`}
               alt={text}/>
      </div>

      <h2 className={`display-2 ${classes.Subtitle}`}>
        An{' '}
        <a className={'fw-bold'}
           href={`http://www.igbo.org`}>
          IGBO
        </a>
        {' '}bowling tournament
      </h2>

      <h3 className={`display-3 ${classes.Dates}`}>
        July 3-5, 2026
      </h3>

      {/*<p className={`${classes.Link}`}>*/}
      {/*  <a href={REGISTER_URL}*/}
      {/*     className={`btn btn-primary`}*/}
      {/*  >*/}
      {/*    Register Now*/}
      {/*  </a>*/}
      {/*</p>*/}

      <p className={`mx-md-4 ${classes.Link}`}>
        <Link href={`/rules`}>
          Tournament Rules
        </Link>
      </p>
    </section>
  );
}

export default Hero;
