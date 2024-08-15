import React from 'react';
import Link from "next/link";
import blogStyles from '../../styles/blog.module.scss';

const Blog: React.FC = () => {
  return (
    <div id="blog" className={blogStyles.blog}>
      <header className={`main-header ${blogStyles.mainHeader}`}>
        <div className={`main-header__container container ${blogStyles.container}`}>
        <h1 className={blogStyles.headerTitle}>Inside the Interface</h1>
          <p>Your gateway to powering up your user interfaces.</p>
        </div>
      </header>
      <main className={blogStyles.blog}>
        <section className={blogStyles.blog_container}>
          <div>
            <ul>
              <li className={blogStyles.card}>
                <header>Blog Post Title</header>
                <p>Blog post content goes here...</p>
                <Link href="/blog/post">Read more</Link>
              </li>
              <li className={blogStyles.card}>
                <header>Blog Post Title</header>
                <p>Blog post content goes here...</p>
                <Link href="/blog/post">Read more</Link>
              </li>
              <li className={blogStyles.card}>
                <header>Blog Post Title</header>
                <p>Blog post content goes here...</p>
                <Link href="/blog/post">Read more</Link>
              </li>
              <li className={blogStyles.card}>
                <header>Blog Post Title</header>
                <p>Blog post content goes here...</p>
                <Link href="/blog/post">Read more</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;