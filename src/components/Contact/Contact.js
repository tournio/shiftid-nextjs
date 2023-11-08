import Image from "next/image";

import scott from '@/images/contact/scott.jpg';
import james from '@/images/contact/james.jpg';
import joseph from '@/images/contact/joseph.jpg';

import classes from './Contact.module.scss';
import Link from "next/link";

const Contact = () => {

  return (
    <section className={classes.Contact} id={'contact'}>
      <h3 className={`section-heading`}>
        Contacts
      </h3>
      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${classes.Card}`}>
            <Image src={james}
                   alt={'Photo of James'}
                   className={`img-fluid card-img-top ${classes.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${classes.Name}`}>
                <a href={'mailto:director@shiftid.org?subject=About%20SHIFTID'}>
                  James Thigpen
                </a>
              </p>
              <p className={classes.Role}>
                Director
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
                Treasurer
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

      <div className={`d-flex justify-content-around justify-content-md-center ${classes.Links}`}>
        <p className={`mx-md-4`}>
          <Link href={`/rules`}>
            Rules
          </Link>
        </p>
      </div>

    </section>
  );
}

export default Contact;
