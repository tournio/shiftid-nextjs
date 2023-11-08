import React from "react";
import styles from './Results.module.scss';

const Results = () => {
  const results = [
      { id: 'team', name: 'Team Event' },
      { id: 'doubles', name: 'Doubles Event' },
      { id: 'singles', name: 'Singles Event' },
      { id: 'individual_all_events', name: 'Individual All Events' },
      { id: 'scratch_masters', name: 'Scratch Masters' },
      { id: 'optional_scratch', name: 'Optional Scratch' },
      { id: 'best_3of9', name: 'Best 3 of 9' },
  ];

  return (
    <section className={`${styles.Results}`}>
      <h3 className={`section-heading`}>
        2023 Tournament Results
      </h3>

      <div className={'row px-2 px-xl-0'}>
        <div className={`col col-lg-6 offset-lg-3`}>
          <div className={`card ${styles.ResultsCard} mb-2`}>
            <ul className={`list-group list-group-flush ${styles.ResultList}`}>
              {results.map((result, i) => (
                    <li key={i} className={`list-group-item ${styles.ResultItem} d-flex justify-content-between`}>
                      <a href={`/results/2023/${result.id}.pdf`}
                         className={`${styles.ResultLink} mt-2`}>
                        {`${result.name}`}
                      </a>
                      <a href={`/results/2023/${result.id}.pdf`}
                         className={`btn btn-outline-secondary`}
                         title='Download PDF'>
                        <i className="bi-download" aria-hidden={true}></i>
                      </a>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
