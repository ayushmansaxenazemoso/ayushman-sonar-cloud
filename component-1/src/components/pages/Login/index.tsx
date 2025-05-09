import React, { useState } from 'react';
import TwoPanelTemplate from '../../template/Default';
import LoginForm from '../../organisms/LoginForm';
import Typography from '../../atoms/Typography'; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClear = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  const loginForm = (
    <LoginForm
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      onClear={handleClear}
    />
  );

  const leftContent = (
    <div className="left-panel-content">
      <Typography
        heading="Seeder"
        subtext="Your farming partner platform"
        size="large"
      />
    </div>
  );

  return (
    <TwoPanelTemplate leftContent={leftContent} rightContent={loginForm} />
  );
};

export default LoginPage;
