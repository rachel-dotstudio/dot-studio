import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProposalLayout from './layout-proposal';  // Import the layout
import Image from 'next/image';

export async function getStaticPaths() {
  const files = fs.readdirSync('Contents/Proposals');
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(path.join('Contents/Proposals', slug + '.md'), 'utf-8');
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
        <Image src={`/images/${proposal.logo}`} alt={`${proposal.companyName} logo`} width={200} height={200} />
      </div>
    </ProposalLayout>
  );
};

export default ProposalPage;