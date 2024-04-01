import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover'>
    <Head>
      <title>{title} | KAMYIE NUTRITION</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content='KAMYIE NUTRITION' />
      <meta property='og:title' content={`${title} | KAMYIE NUTRITION`} />
      <meta property='og:description' content='KAMYIE NUTRITION' />
      <meta property='og:url' content='https://kamyie-nutrition.com' />
      <meta property='og:type' content='website' />
      <link rel='icon' href='/images/favicon.ico' />
    </Head>
    {children}
  </div>
);

export default Layout;
