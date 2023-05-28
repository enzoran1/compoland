import React from 'react';
import styles from './Mixins.module.scss';


export const colors = {
  primary: '#86C232',
  secondary: '#001F3F',
  success: '#2ECC40',
  info: '#39CCCC',
  warning: '#FF851B',
  danger: '#FF4136',
  light: '#F3F3F3',
  dark: '#222222',
  transparent: 'transparent',
};

const Mixins = () => (
  <div className={styles.Mixins} data-testid="Mixins">
    Mixins Component
  </div>
);

Mixins.propTypes = {};

Mixins.defaultProps = {};

export default Mixins;
