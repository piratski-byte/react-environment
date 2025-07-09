import logo from '@/assets/images/logo.svg'; // благодаря alias `@`

const Logo = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Logo" width={64} height={64} />
    </div>
  );
};

export default Logo;
