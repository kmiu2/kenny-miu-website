import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import Contact from '../src/components/contact';
import Education from '../src/components/education';
import TopHome from '../src/components/top_home';

export default function EducationPage(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isTabletOrMobile ? "0" : "0 7.5%" }}>
        <Education />
        <Contact />
      </div>
    </div>
  );
}
