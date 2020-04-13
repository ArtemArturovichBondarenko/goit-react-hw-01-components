import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <div className={styles.wrapperStatistic}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item} style={{backgroundColor: generateColor()}}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.prototype = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
