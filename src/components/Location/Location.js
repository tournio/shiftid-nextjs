import Image from 'next/image';

import bowleroWhite from '../../images/bowlero-white-800w.png';
import bowleroBlack from '../../images/bowlero-black-800w.png';

import classes from './Location.module.scss';

const Location = () => {

  return (
    <section className={classes.Location} id={'location'}>
      <h3 className={`section-heading`}>
        Bowling Center
      </h3>
      <div className={'row mb-3 d-flex justify-content-center'}>
        <div className={`col-8 ${classes.Logo}`}>
          <a href={'https://www.bowlero.com/location/bowlero-garland'}
             target={'_blank'}>
            <Image src={bowleroBlack}
                   alt={'Logo for Bowlero'}
                   className={`w-100 h-auto ${classes.Light}`}
            />
            <Image src={bowleroWhite}
                   alt={'Logo for Bowlero'}
                   className={`w-100 h-auto ${classes.Dark}`}
            />
          </a>
        </div>
        <div className={'col'}>
          <h4 className={``}>
            <a href={'https://www.bowlero.com/location/bowlero-garland'}>
              Bowlero Garland
            </a>
          </h4>
          <address>
            <span className={`d-block`}>
              1950 Marketplace Dr
            </span>
            <span className={`d-block`}>
              Garland, TX 75041
            </span>
            <span className={`d-block`}>
              <i className={`bi-telephone-fill me-2`} aria-hidden={true}/>
              <a href={`tel:9726138100`}>
                972-613-8100
              </a>
            </span>
          </address>
        </div>
      </div>
      <div className={`ratio ratio-21x9 ${classes.Map}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3327766374628!2d-96.65719842322007!3d32.86291367362767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea72f35838bf3%3A0xdba120266f489ba2!2s1950%20Marketplace%20Dr%2C%20Garland%2C%20TX%2075041!5e0!3m2!1sen!2sus!4v1691269274481!5m2!1sen!2sus"
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

export default Location;
