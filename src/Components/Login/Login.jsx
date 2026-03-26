import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fix: Using full URL to avoid 405 Method Not Allowed on Vercel
    const API_BASE = window.location.hostname === 'localhost' 
      ? "http://localhost:5000" 
      : "https://wedding-backend-azure.vercel.app";

    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        // If it still says Invalid, check ADMIN_PASSWORD in Backend Vercel Envs
        alert(data.error || "Invalid Password");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server unreachable. Check if backend is live.");
    }
  };

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ddd', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '20px' }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            style={{ width: '100%', padding: '12px', marginBottom: '15px', boxSizing: 'border-box' }}
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Admin Password"
            required
          />
          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;