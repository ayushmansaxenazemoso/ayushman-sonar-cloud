import React from 'react';
import './index.css';
import ImageIcon from '../../atoms/ImageIcon';
const googleLogo = require('../../../assets/google.png');

interface SocialLogin {
  logo?:string,
  alt?:string

}

const SocialLogin: React.FC<SocialLogin> = ({ logo= googleLogo, alt='google image' }) => {
  return (
    <div className="social-login">
      <ImageIcon src={logo} alt={alt} />
      {/* <ImageIcon src={xeroLogo} alt="Xero" /> */}
    </div>
  );
};

export default SocialLogin;