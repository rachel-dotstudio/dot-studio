// ** NOTE: This page is app/page.tsx **

import React, { useEffect } from 'react';
import Services from '@/components/services';
import Logos from '@/components/logos';
import Header from '@/components/header';

// Extend the Window interface
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

export default function Home() {
  useEffect(() => {
    const identityScript = document.createElement('script');
    identityScript.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    document.body.appendChild(identityScript);

    identityScript.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user: any) => {
          if (user) {
            window.location.href = "/admin";
          }
        });

        window.netlifyIdentity.on('login', () => {
          window.location.href = "/admin";
        });
      }
    };
  }, []);

  return (
    <main>
      <Header />
      <Logos />
      <Services />
    </main>
  );
}