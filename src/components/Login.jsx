import React, { useState } from 'react';
import { auth, loginWithEmailAndPassword } from '../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const handleLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div>Hello {user ? user.email : 'Guest'}</div>
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
