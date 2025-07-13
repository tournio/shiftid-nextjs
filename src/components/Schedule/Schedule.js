import classes from './Schedule.module.scss';

const Schedule = () => {

  const days = [
    {
      date: 'Friday, July 3',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '6pm - 8pm',
        },
        {
          name: 'No-Tap Mixer Signup',
          detail: '',
          more: 'Open to bowlers of all ages, including non-tournament bowlers',
          time: '6:00pm - 7:45pm',
        },
        {
          name: '9-pin No-Tap Mixer',
          detail: 'Bowling Center',
          more: '',
          time: '8:15pm - 10pm',
        },
      ]
    },
    {
      date: 'Saturday, July 4',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center meeting room',
          more: '',
          time: '8:30am - 9:45am',
        },
        {
          name: 'Announcements',
          detail: '',
          more: '',
          time: '10:00am - 10:15am',
        },
        {
          name: 'Doubles Event',
          detail: ``,
          more: '',
          time: '10:15am - 12:45pm',
        },
        {
          name: 'Team Event',
          detail: ``,
          more: '',
          time: '1:45pm - 4:15pm',
          noted: true,
        },
      ]
    },
    {
      date: 'Sunday, July 5',
      events: [
        {
          name: 'Doubles and Team Results/Awards + Cash and Free Entry Drawings',
          detail: '',
          more: '',
          time: '9:30am - 10:00am',
        },
        {
          name: 'Singles Event',
          detail: '',
          more: '',
          time: '10:00am - 12:30pm',
        },
        {
          name: 'Singles Results/Awards + Cash and Free Entry Drawings',
          detail: '',
          more: '',
          time: '1:30pm - 1:45pm',
          noted: true,
        },
        {
          name: 'Scratch Masters Check-in',
          detail: 'Competition will begin immediately following check-in completion',
          time: '1:45pm - 4:30pm',
          noted: true,
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
                      {e.noted && <sup className={'ps-1'}>*</sup>}
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

      <div className={'my-3'}>
        <span className={'fw-bold pe-1'}>
          <sup className={'pe-1'}>*</sup>
          Note:
        </span>
        Start time may vary, but will be announced if so.
      </div>

      <div className={`section-image-background ${classes.BackgroundImage}`}></div>
      <div className={`section-background-shade ${classes.BackgroundShade}`}></div>
    </section>
  )
}

export default Schedule;
