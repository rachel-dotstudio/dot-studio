import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Extend the Window interface
declare global {
  interface Window {
    netlifyIdentity: any;
  }
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Fetch the proposals data
export async function getStaticProps() {
  const proposalsDirectory = path.join(process.cwd(), 'Contents/Proposals');
  const filenames = fs.readdirSync(proposalsDirectory);

  const proposals = filenames.map((filename) => {
    const filePath = path.join(proposalsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });

  return {
    props: {
      proposals,
    },
  };
}

interface ProposalProps {
  proposals: {
    slug: string;
    title: string;
    description: string;
    logo: string;
  }[];
}

export default function ProposalsPage({ proposals }: ProposalProps) {
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
      <h1>Proposals</h1>
      <ul>
        {proposals.map((proposal) => (
          <li key={proposal.slug}>
            <Link href={`/Proposals/${proposal.slug}`}>
              <h2>{proposal.title}</h2>
            </Link>
            <p>{proposal.description}</p>
            <img
              src={`/images/${proposal.logo}`}
              alt={`${proposal.title} logo`}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
