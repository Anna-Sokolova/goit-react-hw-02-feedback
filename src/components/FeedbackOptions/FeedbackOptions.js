import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return optionsKeys.map(option => {
    const btnTextContent =
      option[0].toUpperCase() + option.slice(1).toLowerCase();

    return (
      <button
        key={option}
        type="button"
        name={option}
        className={styles.btn}
        onClick={onLeaveFeedback}
      >
        {btnTextContent}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
