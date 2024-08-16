import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Ticker from '@/components/ticker';
import Nav from '@/components/nav';
import '../../src/styles/global.scss';
import Footer from '@/components/footer';

interface Proposal {
  slug: string;
  companyName: string;
  description: string;
  logo: string;
  uxdescriptionsubtitle: string;
  uxdescription: string;
  pddescriptionsubtitle: string;
  pddescription: string;
  seodescriptionsubtitle: string;
  seodescription: string;
  seodescriptionsubtitle2: string;
  seodescription2: string;
  visualdesignsubtitle: string;
  visualdesign: string;
  visualdesignsubtitle2: string;
  visualdesign2: string;
  contentstrategysubtitle: string;
  contentstrategy: string;
  contentstrategysubtitle2: string;
  contentstrategy2: string;
  accessibilitysubtitle: string;
  accessibility: string;
  analyticssubtitle: string;
  analytics: string;
}

interface ProposalsPageProps {
  proposals: Proposal[];
}

export async function getStaticProps() {
  const proposalsDirectory = path.join(process.cwd(), 'Contents/Proposals');
  const filenames = fs.readdirSync(proposalsDirectory);

  const proposals = filenames.map((filename) => {
    const filePath = path.join(proposalsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      companyName: data.companyName,
      description: data.description,
      logo: data.logo,
      uxdescriptionsubtitle: data.uxdescriptionsubtitle,
      uxdescription: data.uxdescription,
      pddescriptionsubtitle: data.pddescriptionsubtitle,
      pddescription: data.pddescription,
      seodescriptionsubtitle: data.seodescriptionsubtitle,
      seodescription: data.seodescription,
      seodescriptionsubtitle2: data.seodescriptionsubtitle2,
      seodescription2: data.seodescription2,
      visualdesignsubtitle: data.visualdesignsubtitle,
      visualdesign: data.visualdesign,
      visualdesignsubtitle2: data.visualdesignsubtitle2,
      visualdesign2: data.visualdesign2,
      contentstrategysubtitle: data.contentstrategysubtitle,
      contentstrategy: data.contentstrategy,
      contentstrategysubtitle2: data.contentstrategysubtitle2,
      contentstrategy2: data.contentstrategy2,
      accessibilitysubtitle: data.accessibilitysubtitle,
      accessibility: data.accessibility,
      analyticssubtitle: data.analyticssubtitle,
      analytics: data.analytics,
    };
  });

  return {
    props: {
      proposals,
    },
  };
}

const ProposalsPage: React.FC<ProposalsPageProps> = ({ proposals }) => {
  return (
    <div>
      <Ticker />
      <Nav />
      <div>
      <p>List of Proposals</p>
      <ul>
        {proposals.map((proposal) => (
          <li key={proposal.slug}>
            <Link href={`/proposals/${proposal.slug}`} legacyBehavior>
              <a>
                <p>{proposal.companyName}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </div>


 
  );
};

export default ProposalsPage;