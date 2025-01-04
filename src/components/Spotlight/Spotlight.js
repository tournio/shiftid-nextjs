import Link from "next/link";
import classes from './Spotlight.module.scss';
import {REGISTER_URL} from "@/js/misc";

const Spotlight = () => {
  const comingSoon = (
    <div>
      <p>
        What&apos;s that sound? Why, it&apos;s the sound of SHIFTID 2025 coming together!
      </p>
      <p>
        Keep your eyes on this spot for updates, as we plan to open registration on April 4.
      </p>
    </div>
  );

  // const prelimText = <p>
  //   SHIFTID is the newest member of the IGBO tournament community, showcasing the best of what the Dallas/Fort Worth area has to offer its LGBTQ+ citizens and visitors. Come bowl with us this July!
  // </p>

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
  //       That&apos;s all, folks! The sophomore outing of SHIFTID is officially in the books. We are immensely thankful for all our
  //       bowlers, sponsors, and everyone who helped make it a reality. See you next year!
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
        {comingSoon}
        {/*{prelimText}*/}
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
