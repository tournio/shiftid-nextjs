import Link from "next/link";
import Image from "next/image";

import sportsBalls from '@/images/dfw/sports-balls.jpg';
import texMex from '@/images/dfw/tex-mex.jpg';
import sunshine from '@/images/dfw/sun-rays.jpg';
import classes from './Area.module.scss';
import lettersLogo from "@/images/shiftid-logo-just-letters.jpg";

const Area = ({full = true}) => {
  // full determines whether we show a summary or the whole shebang
  // ... the whole shebang is intended to be on its own page, while
  // the summary is intended for the Dallas section of the main page

  return (
    <section className={classes.Area} id={'dallas'}>
      {full && (
        <Link href={'/'}
              title={'Back to main page'}
              className={``}>
          <Image src={lettersLogo}
                 alt={'SHIFTID logo'}
                 className={`img-fluid ${classes.LogoImage}`}
          />
        </Link>
      )}
      <h3 className={`section-heading`}>
        Dallas / Fort Worth
      </h3>

      <div className={classes.JumboImage}>
        <div className={`${classes.DowntownDaytimeColor}`}/>
        <div className={`${classes.DowntownDaytimeImage}`}/>
      </div>
      <div className={`${classes.Credit}`}>
        Image via{' '}
        <a href={'https://www.pexels.com/photo/dallas-fireworks-show-14972110/'}
           target={'_blank'}>
          Sadid Morshed
        </a>
      </div>

      <div className={`card ${classes.Thing}`}>
        <div className={`card-body ${classes.CardBody}`}>
          <p className={``}>
            Home to the Texas State Fair, the world&apos;s largest indoor rodeo, and more professional sports teams than you can shake a hockey stick at, Dallas&mdash;not just Dallas itself, but the whole Dallas-Ft. Worth
            metroplex&mdash;has something to offer for everyone.
          </p>
        </div>
      </div>

      {!full && (
        <p className={classes.MoreLink}>
          <Link href={'/dfw'}
                className={`icon-link icon-link-hover`}
                role={`button`}>
            More
            <i className={'bi bi-arrow-right align-self-baseline'} aria-hidden={true}/>
          </Link>
        </p>
      )}
      {full && (
        <div className={'row'}>
          <div className={`${classes.Thing} card col-12 col-md-6 col-lg-4`}>
            <div className={'row g-0'}>
              <div className={`col-sm-4 d-flex flex-column col-md-12`}>
                <div className={`${classes.FlippyImage} flex-grow-1`}>
                  <Image src={sunshine}
                         alt={'The sun shining in a partly cloudy sky'}
                         className={`${classes.Img}`}
                         sizes={'(max-width: 575px) 90vw, (max-width: 767px) 50vw, (max-width: 1199px) 20vw (min-width: 1200px) 15vw'}
                  />
                </div>
                <div className={`${classes.Credit}`}>
                  Image by{' '}
                  <a href={'https://www.pexels.com/photo/white-clouds-on-sky-3768/'}
                     target={'_blank'}>
                    Skitterphoto
                  </a>
                </div>
              </div>
              <div className={'col-sm-8 col-md-12'}>
                <div className={`card-body ${classes.CardBody}`}>
                  <div className={'card-title'}>
                    <h4>
                      Weather
                    </h4>
                  </div>
                  <p>
                    It doesn&apos;t get much more pleasant outside than Dallas in November. The summer heat and humidity have receded, and the coolness of autumn &ndash; such as it exists here &ndash; is just starting to tiptoe in.
                  </p>
                  <p>
                    <span className={'d-block'}>
                      Average high:{' '}
                      <span className={classes.HighTemp}>
                        72&deg;F (22&deg;C)
                      </span>
                    </span>
                    <span className={'d-block'}>
                      Average low:{' '}
                      <span className={classes.LowTemp}>
                        52&deg;F (11&deg;C)
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${classes.Thing} card col-12 col-sm-6 col-sm-6 col-lg-4`}>
            <div className={`${classes.Image}`}>
              <Image src={texMex}
                     alt={'Tex-Mex food'}
                     className={`${classes.Img}`}
                     sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
              />
            </div>
            <div className={`${classes.Credit}`}>
              Image via{' '}
              <a href={'https://pxhere.com/en/photo/1622599'}
                 target={'_blank'}>
                PxHere
              </a>
            </div>
            <div className={`card-body ${classes.CardBody}`}>
              <div className={'card-title'}>
                <h4>
                  Food! Glorious Food!
                </h4>
              </div>
              <p>
                Tex-Mex. Barbecue. Steak. Vegan. Oh yeah, Dallas can please any palate. Here are some of our favorites:
              </p>
              <ul>
                <li>
                  <a href={'https://unclejulios.com'}
                     target={'_blank'}>
                    Uncle Julio&apos;s
                  </a>
                </li>
                <li>
                  <a href={'https://gloriascuisine.com'}
                     target={'_blank'}>
                    Gloria&apos;s Latin Cuisine
                  </a>
                </li>
                <li>
                  <a href={'https://www.iamaflowerchild.com/'}
                     target={'_blank'}>
                    Flower Child
                  </a>
                </li>
                <li>
                  <a href={'https://www.burntbbqandtacos.com/'}
                     target={'_blank'}>
                    Burnt Bbq &amp; Tacos
                  </a>
                </li>
                <li>
                  <a href={'https://www.arthursdallas.com/'}
                     target={'_blank'}>
                    Arthur&apos;s Steakhouse
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${classes.Thing} card col-12 col-sm-6 col-lg-4`}>
            <div className={`${classes.Image}`}>
              <Image src={sportsBalls}
                     alt={'Sports balls'}
                     className={`${classes.Img}`}
                     sizes={'(max-width: 575px) 95vw, (max-width: 767px) 50vw, (max-width: 1399px) 33vw'}
              />
            </div>
            <div className={`${classes.Credit}`}>
              Image via{' '}
              <a href={'https://www.peakpx.com/455682/football-basketball-and-soccer-ball-lot'}
                 target={'_blank'}>
                PeakPx
              </a>
            </div>
            <div className={`card-body ${classes.CardBody}`}>
              <div className={'card-title'}>
                <h4>
                  OMG Sports!
                </h4>
              </div>
              <p>
                October is prime season for football, baseball (well, the playoffs, at least), basketball, hockey, soccer (the <em>real</em> football!). No matter which team you root for or which sport you enjoy the most, you&apos;re sure to find a game or match to cheer or jeer at!
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}

export default Area;
