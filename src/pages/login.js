import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/qq.jpg')`,
        backgroundColor: 'black', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>Sign In</h2>
      <form style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
        <input
          type="email"
          placeholder="Email"
          style={{ margin: '10px 0', padding: '10px', fontSize: 16 }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ margin: '10px 0', padding: '10px', fontSize: 16 }}
        />
        <button
          type="submit"
          style={{
            marginTop: 20,
            padding: '10px',
            backgroundColor: 'red',
            border: 'none',
            color: 'white',
            fontSize: 18,
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
