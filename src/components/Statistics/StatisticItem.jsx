import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';
const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItem;
