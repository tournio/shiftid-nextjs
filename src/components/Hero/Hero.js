import Image from "next/image";
import stackedLogo from '../../images/shiftid-logo-stacked.webp';

import classes from './Hero.module.scss';
import Link from "next/link";

const Hero = ({linkToFront = false}) => {

  const text = `Seniors Handicap Invitational Fall Tournament in DFW`;
  const header = !linkToFront ? text : <Link href={'/'}>{text}</Link>;

  return (
    <section className={`${classes.Hero}`}>
      <div className={`${classes.Content}`}>

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
          July 5-7, 2024
        </h3>
      </div>
    </section>
  );
}

export default Hero;
