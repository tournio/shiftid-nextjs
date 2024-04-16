import classes from './Spotlight.module.scss';

const Spotlight = () => {
  // const REGISTER_URL = 'https://www.tourn.io/tournaments/shiftid-2024';

  const prelimText = <p>
    SHIFTID is the newest member of the IGBO tournament community, showcasing the best of what the Dallas/Fort Worth area has to offer its LGBTQ+ citizens and visitors. Come bowl with us this July!
  </p>

  // const registrationOpen = (
  //   <>
  //     <p>
  //       Registration is open!
  //     </p>
  //     <p>
  //       <a href={REGISTER_URL}
  //          className={`btn btn-primary`}
  //       >
  //         Register Now
  //       </a>
  //     </p>
  //   </>
  // );

  // const allDone = (
  //   <div>
  //     <p>
  //       That&apos;s all, folks! The inaugural SHIFTID is officially in the books. We are immensely thankful for all our
  //       bowlers, sponsors, and everyone who helped make it a reality. We are excited about growing bigger and better in
  //       the years to come!
  //     </p>
  //
  //     <p>
  //       Check out the results below.
  //       <i className={`bi bi-arrow-down ps-2`} aria-hidden={true}></i>
  //     </p>
  //   </div>
  // );

  // const results = <p className={classes.Links}>
  //   <Link href={'/results'}
  //         className={`btn btn-lg btn-primary`}>
  //     Tournament Results
  //   </Link>
  // </p>

  return (
    <section className={`${classes.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpen}*/}
        {/*{allDone}*/}
        {/*{results}*/}
        {/*<p>*/}
        {/*  Registration is opening soon!*/}
        {/*  /!*<Link href={REGISTER_URL}*!/*/}
        {/*  /!*      className={'btn btn-primary'}>*!/*/}
        {/*  /!*  Register*!/*/}
        {/*  /!*</Link>*!/*/}
        {/*</p>*/}
      </div>
    </section>
  );
}

export default Spotlight;
