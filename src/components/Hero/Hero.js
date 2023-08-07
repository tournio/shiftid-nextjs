import Link from "next/link";
import Image from "next/image";
import Spotlight from '../Spotlight/Spotlight';
import stackedLogo from '../../images/shiftid-logo-stacked.webp';

import classes from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${classes.Hero}`}>
      <div className={`${classes.Content}`}>

        <h1 className={`display-1 ${classes.Title}`}>
          Seniors Handicap Invitational Fall Tournament in DFW
        </h1>

        <div className={`row d-flex justify-content-center ${classes.Logo}`}>
          <Image src={stackedLogo}
                 className={`col-11 col-md-8 col-lg-6 img-fluid`}
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
          November 3-5, 2023
        </h3>

        <div className={`d-flex justify-content-around justify-content-md-center ${classes.Links}`}>
          <p className={`mx-md-4`}>
            <Link href={`https://www.tourn.io/tournaments/shiftid-2023`}
                  className={`btn btn-primary`}
                  target={'_blank'}>
              Register
            </Link>
          </p>
          <p className={`mx-md-4`}>
            <Link href={`/rules`}
                  className={`btn btn-primary`}>
              Rules
            </Link>
          </p>
        </div>
      </div>

      <Spotlight/>
    </section>
  );
}

export default Hero;
