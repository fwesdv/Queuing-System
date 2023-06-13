import styles from './login.module.css';
import { useEffect, useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';
import { login } from '../../store/slices/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';

interface ILoginState {
  username: string;
  password: string;
  errors: {
    username?: string;
    password?: string;
    message?: string;
  };
}

type InputProps = {
  className?: string;
  value?: any;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  style?: any;
  disabled?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, value, placeholder, type, name, id, handleChange, style, children, disabled, checked }: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      style={style}
      disabled={disabled}
      checked={checked}
      onChange={handleChange}
    />
  );
};

const Button = ({ children, onClick, ...rest }: React.ComponentProps<"button">) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

const Login: React.FC = () => {
  const [showpass, setShowpass] = useState(false);
  const [loginState, setLoginState] = useState<ILoginState>({
    username: "",
    password: "",
    errors: {},
  });
  const authenticated = useAppSelector((state: RootState) => state.auth.authenticated);
  const error = useAppSelector((state: RootState) => state.auth.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authenticated ? navigate("/Dashboard") : navigate("/Login");
  }, [authenticated]);

  const handleForgotPassword = () => {
    navigate("/ForgotPassword");
  };

  const togglePassword = () => {
    setShowpass(!showpass);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let errors = { ...loginState.errors };
    switch (name) {
      case "username":
        errors.username = value.length < 5 ? "Tên đăng nhập ít nhất 5 ký tự" : undefined;
        break;
      case "password":
        errors.password = value.length < 8 ? "Mật khẩu phải có ít nhất 8 ký tự" : undefined;
        break;
      default:
        break;
    }

    setLoginState({
      ...loginState,
      [name]: value,
      errors,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errors = { ...loginState.errors };
    if (!loginState.username) {
      errors.username = "*Chưa nhập tên đăng nhập";
    }
    if (!loginState.password) {
      errors.password = "*Chưa nhập mật khẩu";
    }

    if (!errors.username && !errors.password) {
      try {
        const email = loginState.username;
        const password = loginState.password;
        await dispatch(login({ email, password }));
      } catch (error) {
        errors.password = "Sai tài khoản hoặc mật khẩu";
      }
    } else {
      setLoginState({ ...loginState, errors });
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <div className={styles.login_main}>
          <div className={styles.menu_logo}>
            <div></div>
          </div>
          <div className={styles.container}>
            <label htmlFor="username">
              <b>Tên đăng nhập *</b>
            </label>
            <Input
              type='text'
              className={styles.input}
              placeholder='Tên Đăng Nhập'
              name='username'
              id='username'
              handleChange={handleInputChange}
            />
            {loginState.errors.username && <p className='require_error'>*Chưa nhập tên đăng nhập</p>}
            <label htmlFor="password">
              <b>Mật khẩu *</b>
            </label>
            <div className={styles.gird_input}>
              <Input
                type={showpass ? 'text' : 'password'}
                className={styles.input}
                placeholder='Mật Khẩu'
                name='password'
                id='password'
                handleChange={handleInputChange}
              />
              <div
                className={styles.eye}
                onClick={togglePassword}
                style={{
                  position: 'absolute',
                  top: '23px',
                  right: '10px',
                }}
              >
                {showpass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            {loginState.errors.password && <p className='require_error'>*Chưa nhập mật khẩu</p>}
            {error && <p className='require_error'>{error}</p>}
            <a href="/fg_Password" className={styles.fg_password} onClick={handleForgotPassword}>
              Quên mật khẩu?
            </a>
          </div>
          <Button type="submit" className={styles.btn}>
            Đăng nhập
          </Button>
        </div>
      </form>
      <div className={styles.login_bg}>
        <div className={styles.login_bg_img}></div>
        <div className={styles.login_bg_text}>
          Hệ thống
          <p>QUẢN LÝ XẾP HÀNG</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
