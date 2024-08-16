import matter from 'gray-matter';
import ProposalLayout from '../../../src/app/Proposals/layout-proposal'; 
import Image from 'next/image';

export async function getStaticPaths() {
  const fs = require('fs');
  const pathModule = require('path');
  
  const files = fs.readdirSync('Contents/Proposals');
  const paths = files.map((filename: string) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false, // 404 page for everything else
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const fs = require('fs');
  const pathModule = require('path');
  
  const markdownWithMeta = fs.readFileSync(pathModule.join('Contents/Proposals', slug + '.md'), 'utf-8');
  const { data: proposal } = matter(markdownWithMeta);

  return {
    props: {
      proposal,
    },
  };
}

const ProposalPage: React.FC<{ proposal: { companyName: string; description: string; logo: string } }> = ({ proposal }) => {
  return (
    <ProposalLayout>
      <div>
        <h1>{proposal.companyName}</h1>
        <p>{proposal.description}</p>
        {proposal.logo && <Image src={proposal.logo} alt={proposal.companyName} width={100} height={100} />}
      </div>
    </ProposalLayout>
  );
};

export default ProposalPage;