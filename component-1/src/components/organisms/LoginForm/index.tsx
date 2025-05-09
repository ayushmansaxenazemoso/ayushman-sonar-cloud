
import React from 'react';
import InputField from '../../molecules/InputField';
import Button from '../../atoms/Button/index';
import Typography from '../../atoms/Typography';
import SocialLogin from '../../molecules/SocialLoginButton';
import './index.css';

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: any) => void;
  onPasswordChange: (e: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onClear,
}) => {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <Typography
        heading="Login to Seeder"
        subtext="Enter your mail id and password to login"
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={onPasswordChange}
      />
      <p className="forgot">Forgot Password?</p>
      <div className="button-group">
        <Button text="Continue"  />
        <Button text="Clear" onClick={onClear} />
      </div>
      <div className="divider">or</div>
      <SocialLogin />
      <p className="signup">
        Don't have an account? <span>Sign Up</span>
      </p>
    </form>
  );
};

export default LoginForm;
