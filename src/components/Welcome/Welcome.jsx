import css from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Welcome to the contacts app !</p>
    </div>
  );
};

export default Welcome;
