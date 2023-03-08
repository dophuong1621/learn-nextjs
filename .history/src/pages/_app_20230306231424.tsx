import React from 'react';
import App from 'next/app';
import Layout from '../components/layouts/';
import '@/styles/header.css';
import '@/styles/header.css';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}