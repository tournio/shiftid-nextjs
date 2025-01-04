import Image from "next/image";
import Link from "next/link";
import stackedLogo from '../../images/shiftid-logo-stacked.webp';
import {REGISTER_URL} from "@/js/misc";

import classes from './Hero.module.scss';

const Hero = ({linkToFront = false}) => {

  const text = `Seniors Handicap Invitational Family Tournament in DFW`;
  const header = !linkToFront ? text : <Link href={'/'}>{text}</Link>;

  return (
    <section className={`${classes.Hero}`}>
      <h1 className={`display-1 ${classes.Title}`}>
        {header}
      </h1>

      <div className={`row d-flex justify-content-center ${classes.Logo}`}>
        <Image src={stackedLogo}
               className={`col-11 col-md-6 col-lg-5 img-fluid`}
               alt={'SHIFTID logo'}/>
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
        July 4-6, 2025
      </h3>

      <p className={`${classes.Link}`}>
        <a href={REGISTER_URL}
           className={`btn btn-primary`}
        >
          Register Now
        </a>
      </p>

      <p className={`mx-md-4 ${classes.Link}`}>
        <Link href={`/rules`}>
          Tournament Rules
        </Link>
      </p>
    </section>
  );
}

export default Hero;
