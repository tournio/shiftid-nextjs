import classes from './Local.module.scss';

const Local = () => {

  return (
    <section className={classes.Local} id={'igbo-local'}>
      <h3 className={'section-heading'}>
        IGBO Local
      </h3>
      <h5 className={`text-start text-sm-center`}>
        IGBO is well-represented across the DFW Metroplex!
      </h5>

      <div className={`row justify-content-center mb-3`}>
        <div className={'card col-12 col-sm-6 col-lg-4'}>
          <div className={'card-header'}>
            <p className={'lead mb-0'}>
              Leagues
            </p>
          </div>
          <div className={`list-group list-group-flush`}>
            <li className={`list-group-item`}>
              <a href={'https://www.leaguesecretary.com/bowling-centers/cityview-lanes-fort-worth-texas/bowling-leagues/sunset-combo/dashboard/5490'}
                 target={'_blank'}>
                Sunset Combo
              </a>
            </li>
            <li className={`list-group-item`}>
              <a href={'https://www.facebook.com/profile.php?id=100047219118011'}
                 target={'_blank'}>
                Metroplex Rainbow Bowlers
              </a>
            </li>
            <li className={`list-group-item`}>
              <a href={'https://www.facebook.com/oaklawnbowlingassociation'}
                 target={'_blank'}>
                Oak Lawn Bowling Association
              </a>
            </li>
            <li className={`list-group-item`}>
              <a href={'https://www.facebook.com/profile.php?id=100064353984415'}
                 target={'_blank'}>
                L.A.M.B.D.A.
              </a>
            </li>
          </div>
        </div>

        <div className={'card col-12 col-sm-6 col-lg-4'}>
          <div className={'card-header'}>
            <p className={'lead mb-0'}>
              Tournaments
            </p>
          </div>
          <div className={`list-group list-group-flush`}>
            <li className={`list-group-item`}>
              <a href={'http://trotbowling.com/'}
                 target={'_blank'}>
                Texas Roll Off Tournament (TROT)
              </a>
            </li>
            <li className={`list-group-item`}>
              <a href={'https://www.bigdclassic.com'}
                 target={'_blank'}>
                Big D Classic
              </a>
            </li>
            <li className={`list-group-item`}>
              <a href={`https://www.damitbowling.org/`}
                 target={'_blank'}>
                Dallas Area Masters Invitational Tournament (DAMIT)
              </a>
            </li>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Local;
