import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from '../../styles/pages/posts.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div  className={styles.posts}>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspace</strong>
            <p>In this guide, you will leran how to create a Monorepo to manage multiple packages with a shared button...</p>
          </a>

          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspace</strong>
            <p>In this guide, you will leran how to create a Monorepo to manage multiple packages with a shared button...</p>
          </a>

          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspace</strong>
            <p>In this guide, you will leran how to create a Monorepo to manage multiple packages with a shared button...</p>
          </a>

          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Creating a Monorepo with Lerna and Yarn Workspace</strong>
            <p>In this guide, you will leran how to create a Monorepo to manage multiple packages with a shared button...</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [
      Prismic.Predicates.at('document.type', 'publication')
    ],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  );

  return {
    props: {}
  }
}