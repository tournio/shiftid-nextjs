import Image from "next/image";
import Link from "next/link";
import fireworksLogo from '../../images/logo-fireworks.png';

import classes from './Fundraisers.module.scss';

const Fundraisers = () => (
  <section className={`${classes.Fundraisers}`}>
    <div className={`row d-flex justify-content-center`}>
      <div className={`col-12 col-md-8`}>
        <Link href={'/'}
              title={'Back to main page'}
              className={``}>
          <Image src={fireworksLogo}
                 alt={'Seniors Handicap Invitational Family Tournament in DFW'}
                 className={`img-fluid ${classes.Image}`}
          />
        </Link>
      </div>
    </div>

    <h2 className={'my-3'}>
      SHIFTID Saturday 9-Pin Fundraiser
    </h2>

    <div className={`row justify-content-around`}>
      <div className={`col-12 col-md-6 col-lg-5 ${classes.Occurrence}`}>
        <h3>
          May 24
        </h3>
        <h4>
          @ Cityview in Fort Worth
        </h4>
        <div className={`ratio ratio-4x3 ${classes.Map}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6717.74646914483!2d-97.41111850336478!3d32.66281734945672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6d6bf6f93c37%3A0x1557809b9120aef8!2sCityview%20Lanes!5e0!3m2!1sen!2sus!4v1736104837882!5m2!1sen!2sus"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <address>
          6601 Oakmont Blvd
          <br />
          Fort Worth, TX 76132
        </address>
      </div>
      {/*<div className={`col-12 col-md-6 col-lg-5 ${classes.Occurrence}`}>*/}
      {/*  <h3>*/}
      {/*    March 1*/}
      {/*  </h3>*/}
      {/*  <h4>*/}
      {/*    @ AMF Richardson Lanes*/}
      {/*  </h4>*/}
      {/*  <div className={`ratio ratio-4x3 ${classes.Map}`}>*/}
      {/*    <iframe*/}
      {/*      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6693.9212005020945!2d-96.71892952321176!3d32.97844127358005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f2feade4afd%3A0x35206fb40b3d3e7!2sAMF%20Richardson%20Lanes!5e0!3m2!1sen!2sus!4v1736104986056!5m2!1sen!2sus"*/}
      {/*      allowFullScreen="" loading="lazy"*/}
      {/*      referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
      {/*  </div>*/}
      {/*  <address>*/}
      {/*    2101 N Central Expressway*/}
      {/*    <br />*/}
      {/*    Richardson, TX 75080*/}
      {/*  </address>*/}
      {/*</div>*/}
    </div>

    <h3 className={`my-3`}>
      The nitty gritty details (a.k.a. The Rules)
    </h3>

    <h5>
      SHIFTID Saturday 9-pin
    </h5>
    <ul className={`${classes.Rules}`}>
      <li>
        Registration opens at noon.
      </li>
      <li>
        Bowling begins at 1:00PM.
      </li>
      <li>
          <span className={'fw-bold'}>
            Entry Fee:
          </span>
        <span className={'fw-bold mx-2'}>
            $30
          </span>
        <ul>
          <li>$13.50 - lineage</li>
          <li>$10 - prize fund</li>
          <li>$6.50 - donation to SHIFTID</li>
        </ul>
      </li>
      <li>
          <span className={'fw-bold me-2'}>
            Average
          </span>
        <span className={'fw-normal'}>
            (in order of precedence)
          </span>
        <ul>
          <li>
            USBC 2023-2024 composite
          </li>
          <li>
            USBC 2022-2023 composite
          </li>
          <li>
            Current league average (must be verifiable)
          </li>
          <li>
            250 (blind)
          </li>
        </ul>
      </li>
      <li>
          <span className={'fw-bold me-2'}>
            Handicap
          </span>
        <span>
            95% of 250
          </span>
      </li>
      <li>
        100% of prize fund will be awarded for 1 in 10 entries.
      </li>
    </ul>

    <h5>
      Strike Pot Deal Or No Deal
    </h5>
    <ul>
      <li>
          <span className={'fw-bold me-2'}>
            Tickets
          </span>
        <span>
            2 tickets for $1, sold during each game
          </span>
      </li>
      <li>
          <span className={'fw-bold me-2'}>
            Strike Pot
          </span>
        <span>
            50% of ticket sales at the end of each game will be deemed the Strike Pot + any rollover.
          </span>
      </li>
      <li>
        <span className={'fw-bold me-2'}>
          Each holder of a drawn ticket may choose DEAL or NO DEAL:
        </span>
        <ul>
          <li>
              <span className={'fw-bold me-2'}>
                DEAL:
              </span>
            Bowl a strike or a 9-pin strike on your next ball, and
            <span className={'fw-bold mx-1'}>
                win 100%
              </span>
            of the Strike Pot. No strike, no winnings, and 50% of the Strike Pot rolls over to the next game.
          </li>
          <li>
              <span className={'fw-bold me-2'}>
                NO DEAL:
              </span>
            Take
            <span className={'fw-bold mx-1'}>
                25%
              </span>
            of the Strike Pot, no bowling required. 25% of the Strike Pot goes to SHIFTID, the remaining 50% rolls
            over to the next game.
          </li>
        </ul>
      </li>
    </ul>

    <h5>
      Optional Events
    </h5>
    <ul>
      <li>
        Single Handicap Brackets
        <ul>
          <li>
            Paper sheets
          </li>
          <li>
            Cost: $5 per bracket
          </li>
          <li>
            Payout per bracket:
            <ul>
              <li>
                $25 winner
              </li>
              <li>
                $10 runner-up
              </li>
              <li>
                $5 to SHIFTID
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Scratch Side Pot
        <ul>
          <li>
            High game and series
          </li>
          <li>
            Entry: $10
          </li>
          <li>
            $9 to prize fund, $1 to SHIFTID
          </li>
        </ul>
      </li>
    </ul>
  </section>
)

export default Fundraisers;
