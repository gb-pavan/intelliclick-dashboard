import React, { useEffect } from 'react';

const GoogleLogin = () => {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Client ID

  useEffect(() => {
    // Load the Google Identity Services SDK
    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-login-button'),
        { theme: 'outline', size: 'large' } // Customization options
      );
    };

    // Load the Google script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      // Cleanup script
      document.body.removeChild(script);
    };
  }, [clientId]);

  const handleCredentialResponse = (response) => {
    console.log('Encoded JWT ID token:', response.credential);

    // Decode the token and process the login
    // You can send this token to your backend for verification
    const userObject = JSON.parse(atob(response.credential.split('.')[1]));
    console.log('User Information:', userObject);
  };

  return (
    <div>
      <div id="google-login-button"></div>
    </div>
  );
};

export default GoogleLogin;
