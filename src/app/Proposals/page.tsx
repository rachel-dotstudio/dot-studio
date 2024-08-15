import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import proposalStyles from './page.module.scss';

export async function getStaticProps() {
  const proposalsDirectory = path.join(process.cwd(), 'content/proposals');
  const filenames = fs.readdirSync(proposalsDirectory);

  const proposals = filenames.map((filename) => {
    const filePath = path.join(proposalsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      ...data,
      content,
    };
  });

  return {
    props: {
      proposals,
    },
  };
}

const ProposalsPage: React.FC<{ proposals: any[] }> = ({ proposals }) => {
  return (
    <div id="proposals" className={proposalStyles.proposal}>
      <header className={`${proposalStyles.mainHeader}`}>
        <div className={`${proposalStyles.container}`}>
          <h1 className={proposalStyles.headerTitle}>Are you ready to take the next step?</h1>
        </div>
      </header>
      <main className={proposalStyles.proposal_container}>
        <ul className={proposalStyles.list}>
          {proposals.map((proposal) => (
            <li key={proposal.slug} className={proposalStyles.card}>
              <header>{proposal.title}</header>
              <p>{proposal.content.substring(0, 100)}...</p>
              <Link href={`/proposals/${proposal.slug}`}>Read more</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProposalsPage;