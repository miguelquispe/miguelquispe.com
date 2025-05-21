import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  small?: boolean;
}

const Container = ({ children, small }: Props) => {
  const classNames = clsx('mx-auto', small ? 'max-w-4xl' : 'max-w-5xl');

  return <div className={classNames}>{children}</div>;
};

export default Container;
