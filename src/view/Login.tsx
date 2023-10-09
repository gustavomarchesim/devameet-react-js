import logo from '../assets/images/logo.svg';
import emailIcon from '../assets/images/mail.svg';
import senhaIcon from '../assets/images/key.svg';

export const Login = () => {
  return (
    <div className='container-public'>
      <img
        src={logo}
        alt='Logo Devameet'
        className='logo'
      />
      <form>
        <div className='input'>
          <img
            src={emailIcon}
            alt='Logo email'
          />
          <input
            type='text'
            placeholder='E-mail'
          />
        </div>
        <div className='input'>
          <img
            src={senhaIcon}
            alt='Logo senha'
          />
          <input
            type='password'
            placeholder='Senha'
          />
        </div>
        <button type='button'>Login</button>
        <div className='link'>
          <p>Não possui uma conta?</p>
          <a href=''>Faça seu cadastro agora</a>
        </div>
      </form>
    </div>
  );
};
