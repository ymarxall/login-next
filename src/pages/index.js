// app/page.tsx atau pages/index.tsx
import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#f0f0f0', // Light gray background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="wrapper"
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(255, 9, 255, 0.1)',
          width: '350px',
        }}
      >
        <div className="logo" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>

        <div
          className="text-center mt-4 name"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Sign in with Google
        </div>

        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center" style={{ marginBottom: '15px' }}>
            <span className="fas fa-envelope" style={{ color: '#019e16', padding: '10px' }}></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              style={{
                border: '1px solid #4074a7',
                padding: '10px',
                width: 'calc(100% - 40px)',
                borderRadius: '4px',
              }}
            />
          </div>

          <div className="form-field d-flex align-items-center" style={{ marginBottom: '15px' }}>
            <span className="fas fa-key" style={{ color: '#019e16', padding: '10px' }}></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              required
              style={{
                border: '1px solid #4074a7',
                padding: '10px',
                width: 'calc(100% - 40px)',
                borderRadius: '4px',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn mt-3"
            style={{
              backgroundColor: '#4285F4', // Google blue
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Login
          </button>
        </form>

        <div className="text-center fs-6 mt-3">
          <a
            href="#"
            style={{
              color: '#4285F4', // Google blue for links
              textDecoration: 'none',
            }}
          >
            Forget password?
          </a>
        </div>
      </div>
    </main>
  );
}
