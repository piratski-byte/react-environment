import Button from '@components/Button';
import Logo from '@assets/images/logo.svg';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Logo width={32} height={32} fill="white" />
      <Button label="Нажми меня" />
    </div>
  );
};

export default Home;
