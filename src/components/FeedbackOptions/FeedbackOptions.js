import React from 'react';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button key={option} type="button" name={option} className={styles.btn} onClick={onLeaveFeedback}>
      {option[0].toUpperCase() + option.slice(1).toLowerCase()}
    </button>
  ));
};

export default FeedbackOptions;
