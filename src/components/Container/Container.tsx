import clsx from 'clsx';
// import React from 'react';

// import styles from './Container.module.scss';

interface Props {
  children: React.ReactNode;
  small?: boolean;
}

const Container = ({ children, small }: Props) => {
  let classNames = clsx('mx-auto', small ? 'max-w-4xl' : 'max-w-5xl');

  return <div className={classNames}>{children}</div>;
};

export default Container;
