import Link from 'next/link';
import proposalStyles from '../../styles/proposal.module.scss';
import fs from 'fs';
import path from 'path';

const getProposals = () => {
  const proposalsDirectory = path.join(process.cwd(), 'Contents/Proposals');
  const filenames = fs.readdirSync(proposalsDirectory);
  return filenames;
};

const ProposalsPage = () => {
  const filenames = getProposals();

  return (
    <div className={proposalStyles.container}>
      {/* Render proposals */}
      {filenames.map((filename) => (
        <div key={filename}>
          <Link href={`/proposals/${filename.replace(/\.md$/, '')}`}>
            {filename}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProposalsPage;