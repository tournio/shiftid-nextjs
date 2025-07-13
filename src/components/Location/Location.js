import Image from 'next/image';

import amfLogo from '../../images/amf-logo-500.webp';

import classes from './Location.module.scss';

const Location = () => {
  const centerUrl = 'https://www.amf.com/location/amf-richardson-lanes';

  return (
    <section className={classes.Location} id={'location'}>
      <h3 className={`section-heading`}>
        Bowling Center
      </h3>
      <h4 className={'py-5'}>TBD</h4>
      {/*<div className={'row mb-3 d-flex justify-content-center align-items-md-center'}>*/}
      {/*  <div className={`col-8 col-md-4 ${classes.Logo}`}>*/}
      {/*    <a href={centerUrl}*/}
      {/*       target={'_blank'}>*/}
      {/*      <Image src={amfLogo}*/}
      {/*             alt={'Logo for AMF Richardson'}*/}
      {/*             className={`w-100 h-auto ${classes.Image}`}*/}
      {/*      />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className={`col-12 col-md-4 ${classes.Content}`}>*/}
      {/*    <h4 className={``}>*/}
      {/*      <a href={centerUrl}>*/}
      {/*        AMF Richardson Lanes*/}
      {/*      </a>*/}
      {/*    </h4>*/}
      {/*    <address>*/}
      {/*      <span className={`d-block`}>*/}
      {/*         2101 N. Central Expressway*/}
      {/*      </span>*/}
      {/*      <span className={`d-block`}>*/}
      {/*        Richardson, TX 75080*/}
      {/*      </span>*/}
      {/*      <span className={`d-block`}>*/}
      {/*        <i className={`bi-telephone-fill me-2`} aria-hidden={true}/>*/}
      {/*        <a href={`tel:9722312695`}>*/}
      {/*          972-231-2695*/}
      {/*        </a>*/}
      {/*      </span>*/}
      {/*    </address>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={`ratio ratio-21x9 ${classes.Map}`}>*/}
      {/*  <iframe*/}
      {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7877573507544!2d-96.71686820883497!3d32.97820522695134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f2feade4afd%3A0x35206fb40b3d3e7!2sAMF%20Richardson%20Lanes!5e0!3m2!1sen!2sus!4v1716330459063!5m2!1sen!2sus"*/}
      {/*    allowFullScreen="" loading="lazy"*/}
      {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
      {/*</div>*/}
    </section>
  );
}

export default Location;
