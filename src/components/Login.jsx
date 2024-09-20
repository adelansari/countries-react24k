import React, { useState } from 'react';
import { auth, loginWithEmailAndPassword } from '../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px' }}>
      <div>Hello {user ? user.email : 'Guest'}</div>
      <InputGroup className='mb-3'>
        <FormControl type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup className='mb-3'>
        <FormControl
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <div className='d-flex justify-content-between'>
        <Button variant='primary' className='mb-3' onClick={handleLogin}>
          Login
        </Button>
        <Button variant='secondary' className='mb-3' onClick={() => navigate('/register')}>
          Don't have an account?
        </Button>
      </div>
    </Container>
  );
};

export default Login;
