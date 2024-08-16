import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import { marked } from 'marked';
import Layout from "../../src/app/layout";


export const getStaticPaths: GetStaticPaths = async () => {
  const proposalsDirectory = path.join(process.cwd(), 'Contents/Proposals');
  const filenames = fs.readdirSync(proposalsDirectory);
  
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  console.log('Generated paths:', paths); // Debug log to verify paths

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const proposalsDirectory = path.join(process.cwd(), 'Contents/Proposals');
  const filePath = path.join(proposalsDirectory, `${params?.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true }; // If the file doesn't exist, return 404
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);

  console.log('Loaded content for:', params?.slug); // Debug log to verify content loading

  return {
    props: {
      proposal: data,
      content: htmlContent,
    },
  };
};

interface ProposalPageProps {
  proposal: {
    title: string;
    description: string;
    logo: string;
  };
  content: string;
}

export default function ProposalPage({ proposal, content }: ProposalPageProps) {
  return (
    <div>
      <h1>{proposal.title}</h1>
      <p>{proposal.description}</p>
      <img src={`/images/${proposal.logo}`} alt={`${proposal.title} logo`} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}