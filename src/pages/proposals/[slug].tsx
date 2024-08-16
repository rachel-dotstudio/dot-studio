import matter from 'gray-matter';
import ProposalLayout from '../../../src/app/Proposals/layout-proposal'; 
import Image from 'next/image';
import styles from "../../styles/proposal.module.scss";


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

const ProposalPage: React.FC<{ proposal: { 
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
  visualdesignsubtitle2: string;
  visualdesign: string;
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

}> = ({ proposal }) => {
  return (
    <ProposalLayout>
    <div className={styles.proposalmain}>
      <div className={styles.proposalheader}>
        <h1>Unlocking potential to take <span className={styles.companyname}>{proposal.companyName}</span> and your UI to the next level</h1>
      </div>
      <div className={styles.proposalbody}>
      <div className={styles.proposalsummary}>
        <div className={styles.proposalsummaryheader}>
          <p className={styles.cardbodyp}>{proposal.description}</p>
          {proposal.logo && <Image src={proposal.logo} alt={proposal.companyName} width={100} height={100} />}
        </div>

        <div className={styles.proposalsummarybody}>
          <p className={styles.cardbodyp}><span className={styles.bold}>Who are we?</span> We are a new startup who is working with businesses like yours to create next level UIs in websites and software.</p>
          <p className={styles.cardbodyp}><span className={styles.bold}>What do we do?</span> We work with you to support you to improve different parts of your software or website, from usability testing, to design to implementation. Check out our <a>services</a> section to find out more.</p>
          <p className={styles.cardbodyp}>If you have any questions, please <a>get in touch</a></p>
        </div>

        </div>
        <div className={styles.proposalsummaryintro}>
          <p className={styles.cardbodyp}>Below is a bespoke proposal of what we can do to help you take your business to the next level.</p>
        </div>


      <ul className={styles.proposalcontent}>

      <li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>User Experience (UX) Optimization </header>
            <div><div className={`${styles.tag} ${styles.pink}`}>UX Design</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.uxdescriptionsubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.uxdescription}</p>
</li>


<li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>Performance Enhancements</header>
            <div><div className={`${styles.tag} ${styles.lime}`}>Analysis</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.pddescriptionsubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.pddescription}</p>
 </li>

<li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>SEO Improvements</header>
            <div><div className={`${styles.tag} ${styles.orange}`}>CRO</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.seodescriptionsubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.seodescription}</p>
          <p className={styles.cardsubhead}>{proposal.seodescriptionsubtitle2}</p>
          <p className={styles.cardbodyp}>{proposal.seodescription2}</p>
</li>

<li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>Visual Design and Branding</header>
            <div><div className={`${styles.tag} ${styles.purple}`}>UI Design</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.visualdesignsubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.visualdesign}</p>
          <p className={styles.cardsubhead}>{proposal.visualdesignsubtitle2}</p>
          <p className={styles.cardbodyp}>{proposal.visualdesign2}</p>
        </li>

        <li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>Content Strategy</header>
            <div><div className={`${styles.tag}`}>Content</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.contentstrategysubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.contentstrategy}</p>
          <p className={styles.cardsubhead}>{proposal.contentstrategysubtitle2}</p>
          <p className={styles.cardbodyp}>{proposal.contentstrategy2}</p>
          </li>

        <li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>Accessibility Improvements</header>
            <div><div className={`${styles.tag} ${styles.lime}`}>Analysis</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.accessibilitysubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.accessibility}</p>
          </li>

        <li className={styles.card}>
          <span className={styles.cardheader}>
            <header className={styles.cardheaderh1}>Analytics and User Behavior Tracking</header>
            <div><div className={`${styles.tag} ${styles.lime}`}>Analysis</div></div>
          </span>
          <p className={styles.cardsubhead}>{proposal.analyticssubtitle}</p>
          <p className={styles.cardbodyp}>{proposal.analytics}</p>
          </li>
      </ul> 
</div>
</div>
    </ProposalLayout>
  );
};

export default ProposalPage;