import React from 'react';
import Link from "next/link";
import proposalStyles from '@/styles/proposal.module.scss';

const Proposal: React.FC = () => {
  return (
    <div id="proposal" className={proposalStyles.proposal}>
      <header className={`main-header ${proposalStyles.mainHeader}`}>
        <div className={`main-header__container container ${proposalStyles.container}`}>
        <h1 className={proposalStyles.headerTitle}>Are you ready to take <span className={`companyname ${proposalStyles.companyname}`}> Senseye</span> to the next level?</h1>
        </div>
      </header>
      <main className={proposalStyles.proposal}>
        <section className={proposalStyles.proposal_container}>
          <div>
            <ul>
              <li className={proposalStyles.card}>
                <header>proposal Post Title</header>
                <p>proposal post content goes here...</p>
                <Link href="/proposal/post">Read more</Link>
              </li>
              <li className={proposalStyles.card}>
                <header>proposal Post Title</header>
                <p>proposal post content goes here...</p>
                <Link href="/proposal/post">Read more</Link>
              </li>
              <li className={proposalStyles.card}>
                <header>proposal Post Title</header>
                <p>proposal post content goes here...</p>
                <Link href="/proposal/post">Read more</Link>
              </li>
              <li className={proposalStyles.card}>
                <header>proposal Post Title</header>
                <p>proposal post content goes here...</p>
                <Link href="/proposal/post">Read more</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Proposal;