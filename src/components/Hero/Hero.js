import classes from './Hero.module.scss';
import RegisterCTA from '../RegisterCTA/RegisterCTA';
import Spotlight from '../Spotlight/Spotlight';

const Hero = () => {

  return (
    <section className={`${classes.Hero}`}>
      <div className={`${classes.Content}`}>

        <h1 className={`display-1 ${classes.Title}`}>
          The Seniors Handicap Invitational Fall Tournament in DFW
        </h1>

        <h2 className={`display-2 ${classes.Subtitle}`}>
          An{' '}
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        <h3 className={`display-3 ${classes.Dates}`}>
          November 3-5, 2023
        </h3>
      </div>

      <Spotlight/>
    </section>
  );
}

export default Hero;
