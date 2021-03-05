import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <span className={styles.text}>Good:</span> <span className={styles.feedback}>{good}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.text}>Neutral:</span> <span className={styles.feedback}>{neutral}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.text}>Bad:</span> <span className={styles.feedback}>{bad}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.text}>Total:</span> <span className={styles.importantText}>{total}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.text}>Positive feedback:</span>{' '}
      <span className={styles.importantText}>{positivePercentage} %</span>
    </li>
  </ul>
);

export default Statistics;
