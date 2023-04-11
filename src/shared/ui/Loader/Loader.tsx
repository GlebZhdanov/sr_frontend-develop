import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={`${styles.loading} ${styles.bar}`}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
