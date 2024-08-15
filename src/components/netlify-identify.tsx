import { useEffect } from 'react';

const NetlifyIdentity: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true; // Load the script asynchronously
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when the component is unmounted
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default NetlifyIdentity;