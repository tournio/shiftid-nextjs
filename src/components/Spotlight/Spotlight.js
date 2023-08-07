import classes from './Spotlight.module.scss';

const Spotlight = () => {
  const REGISTER_URL = 'https://www.tourn.io/tournaments/shiftid-2023';

  const prelimText = <p>
    SHIFTID is the newest member of the IGBO tournament community, showcasing the best of what the Dallas/Fort Worth area has to offer its LGBTQ+ citizens and visitors.
  </p>

  const registrationOpen = (
    <>
      <p>
        Registration is open.
      </p>
      <p>
        <a href={REGISTER_URL}
           className={``}
        >
          Register Online
        </a>
      </p>
    </>
  );

  return (
    <section className={`${classes.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpen}*/}
      </div>
    </section>
  );
}

export default Spotlight;
