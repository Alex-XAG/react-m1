import { PropTypes } from 'prop-types';
import StatisticItem from './StatisticItem';
import dataStats from '../../data';
import css from './Statistics.module.css';
const Statistics = ({ label, percentage, title = 'UPLOAD STATS' }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stat__list}>
        {dataStats.map(dataStat => (
          <StatisticItem
            key={dataStat.id}
            label={dataStat.label}
            percentage={dataStat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
