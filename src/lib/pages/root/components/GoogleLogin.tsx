import { useEffect } from 'react';

function GoogleLogin() {
  useEffect(() => {
    const googleSignInDiv = document.getElementById('googleSignInDiv');
    if (googleSignInDiv) {
      google.accounts.id.renderButton(googleSignInDiv, {
        theme: 'outline',
        size: 'large',
        type: 'standard',
        width: 380,
      });
    } else {
      console.error('Element with ID "googleSignInDiv" not found');
    }
  }, []);
  return (
    <div id="googleSignInDiv" className="my-6">
      {' '}
    </div>
  );
}

export default GoogleLogin;
