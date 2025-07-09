import Button from '@components/Button';
import logo from '@assets/images/logo.svg';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <img src={logo} width={32} height={32} alt="Logo" />
      <Button label="Нажми меня" />
    </div>
  );
};

export default Home;
