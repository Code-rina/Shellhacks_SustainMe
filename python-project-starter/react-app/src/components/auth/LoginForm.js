import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="login-main-container">
      <div className="home-logo-div">
        <img className="home-logo-img" src="https://imageio.forbes.com/specials-images/imageserve/1151803694/Environment-concept/960x0.jpg?format=jpg&width=960" alt="main_pic"/>
      </div>
      <div className="home-login-container">
        <div className="logo-login-form">Welcome</div>
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className="home-email-password-div">
              <label htmlFor='email' className="home-form-label">Email</label>
              <input className="home-form-input"
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div class="form-outline mb-4">
              <label htmlFor='password' className="home-form-label">Password</label>
              <input className="home-form-input"
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
                <div className="login-button-div">
                  <button className="login-button" type='submit'>Login</button>
                    <div className="home-demo-div">
                        {/* <DemoUser /> */}
                    </div>
                </div>
            </div>
          </form>
          <div className="home-signup-div">
            <div className="home-signup-from-login">
              <h3 className="home-dont-have-an-acct-txt">Don't have an account?</h3>
            </div>
            <div className="home-signup-from-login-button">
               {/* <SignUpFormModal /> */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
