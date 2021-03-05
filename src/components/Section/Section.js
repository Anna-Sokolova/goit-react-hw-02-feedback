import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      <h3 className={styles.title}>{title}</h3>

      {children}
    </section>
  );
};
export default Section;
