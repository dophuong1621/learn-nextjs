import { useState } from 'react';
import App from 'next/app';
import Layout from '../components/layouts/';
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/box-right-content.css';
import '@/styles/history.css';
import '@/styles/list-voucher.css';
import '@/styles/modal.css';
import '@/styles/post.css';
import '@/styles/recharge.css';
import '@/styles/trang-chu.css';
import '@/styles/withdraw-items.css';
import '@/styles/home.css';
import ModalAtm from '@/components/modal/atm';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (

      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}