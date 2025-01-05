import Image from "next/image";

import scott from '@/images/contact/scott.jpg';
import joseph from '@/images/contact/joseph.jpg';
import aricia from '@/images/contact/aricia.jpg';
import mason from '@/images/contact/mason.jpg';

import classes from './Contact.module.scss';

const Contact = () => {

  return (
    <section className={classes.Contact} id={'contact'}>
      <h3 className={`section-heading`}>
        Contacts
      </h3>
      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${classes.Card}`}>
            <Image src={aricia}
                   alt={'Photo of Aricia'}
                   className={`img-fluid card-img-top ${classes.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${classes.Name}`}>
                <a href={'mailto:director@shiftid.org?subject=About%20SHIFTID'}>
                  Aricia Grant
                </a>
              </p>
              <p className={classes.Role}>
                Co-Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${classes.Card}`}>
            <Image src={joseph}
                   alt={'Photo of Joseph'}
                   className={`img-fluid card-img-top ${classes.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${classes.Name}`}>
                <a href={'mailto:treasurer@shiftid.org?subject=About%20SHIFTID'}>
                  Joseph Puckett
                </a>
              </p>
              <p className={classes.Role}>
                Co-Director and Treasurer
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${classes.Card}`}>
            <Image src={mason}
                   alt={'Photo of Mason'}
                   className={`img-fluid card-img-top ${classes.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${classes.Name}`}>
                <a href={'mailto:statistician@shiftid.org?subject=About%20SHIFTID'}>
                  Mason Cox
                </a>
              </p>
              <p className={classes.Role}>
                Secretary / Statistician
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${classes.Card}`}>
            <Image src={scott}
                   alt={'Photo of Scott'}
                   className={`img-fluid card-img-top ${classes.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${classes.Name}`}>
                <a href={'mailto:website@shiftid.org?subject=Regarding%20SHIFTID'}>
                  Scott Stebleton
                </a>
              </p>
              <p className={classes.Role}>
                Technologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
