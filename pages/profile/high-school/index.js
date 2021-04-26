import Head from 'next/head';
import { Content, Header } from "../../../components/layout/layout"
import styles from '../profilePage.module.scss';

export default function HighSchool() {
  return (
    <>
      <Head>
        <title>High School • Class Profile</title>
      </Head>

      <Header />
      
      <Content>
        <h1>High School</h1>
      </Content>
    </>
  );
}
