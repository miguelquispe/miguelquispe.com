import clsx from 'clsx';
import React from 'react';

import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode;
  small?: boolean;
}

const Container = ({ children, small }: Props) => {
  let classNames = clsx(styles.container, small && styles.small);

  return <div className={classNames}>{children}</div>;
};

export default Container;
