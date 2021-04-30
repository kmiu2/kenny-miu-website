import Head from 'next/head';
import Contact from '../src/components/contact';
import Education from '../src/components/education';
import useMediaQuery from '../src/components/helpers';
import TopHome from '../src/components/top_home';

export default function EducationPage(props: any) {
  const isMobile = useMediaQuery(1224);

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isMobile ? "0" : "0 7.5%" }}>
        <Education />
        <Contact />
      </div>
    </div>
  );
}
