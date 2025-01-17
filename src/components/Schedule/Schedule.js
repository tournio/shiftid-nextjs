import classes from './Schedule.module.scss';

const Schedule = () => {

  const days = [
    {
      date: 'Friday, July 4',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '6pm - 8pm',
        },
        {
          name: '9-pin No-Tap Mixer',
          detail: '',
          more: 'Open to all, including non-tournament bowlers',
          time: '8pm - 10pm',
        },
      ]
    },
    {
      date: 'Saturday, July 5',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '8:30am - 9:45am',
        },
        {
          name: 'Doubles and Team Events',
          detail: `We'll have a 30-40 minute break in between events`,
          more: '',
          time: '10:00am - 4:00pm',
        },
      ]
    },
    {
      date: 'Sunday, July 6',
      events: [
        {
          name: 'Singles Event',
          detail: '',
          more: '',
          time: '10:00am - 12:30pm',
        },
        {
          name: 'Scratch Masters',
          detail: '',
          more: '',
          time: '1:00pm - 4:00pm',
        },
      ]
    },
  ]

  return (
    <section className={classes.Schedule} id={'section-schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>

      <p className={`${classes.Disclaimer}`}>
        (All times subject to change)
      </p>

      {days.map((day, i) => (
        <div key={`day_${i}`}
             className={`row g-0 ${classes.DayOfEvents}`}>
          <div className={`${classes.Date} col-md-4`}>
            <h4>
              {day.date}
            </h4>
          </div>

          <div className={`col-md-8`}>
            {day.events.map((e, j) => (
              <div key={`event_${j}`}>
                <div className={`${classes.Event} d-flex justify-content-between`}>
                  <div className={`${classes.Detail}`}>
                    <h5>
                      {e.name}
                    </h5>
                    {e.detail && (
                      <p>
                        {e.detail}
                      </p>
                    )}
                  </div>
                  <div className={`${classes.Time}`}>
                    <h5>
                      {e.time}
                    </h5>
                  </div>
                </div>

                {j+1 < day.events.length && <hr />}
              </div>
            ))}
          </div>

        </div>
      ))}

      <div className={`section-image-background ${classes.BackgroundImage}`}></div>
      <div className={`section-background-shade ${classes.BackgroundShade}`}></div>
    </section>
  )
}

export default Schedule;
