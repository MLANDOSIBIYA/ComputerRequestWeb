import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock password reset logic (replace with API call)
    if (email) {
      setMessage(`A password reset link has been sent to ${email}`);
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#003366', // Blue background
        color: '#fff',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '30px',
            backgroundColor: '#f8f9fa', // Light gray background
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '2px solid #D50032', // Red border
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#D50032', fontWeight: 'bold' }}>
            Reset Password
          </h2>

          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', color: '#003366', fontWeight: 'bold' }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #003366', // Blue border
                textAlign: 'center',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#D50032', // Red button
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Send Reset Link
          </button>

          {message && (
            <p
              style={{
                textAlign: 'center',
                marginTop: '15px',
                color: message.includes('sent') ? 'green' : 'red',
              }}
            >
              {message}
            </p>
          )}

          <p style={{ textAlign: 'center', marginTop: '15px' }}>
            <small style={{ color: '#003366' }}>
              Remembered your password?{' '}
              <a href="/" style={{ color: '#D50032' }}>
                Login
              </a>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
