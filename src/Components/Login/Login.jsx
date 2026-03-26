import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('adminToken', data.token); // Save token
      navigate('/admin'); // Go to admin
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Admin Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;