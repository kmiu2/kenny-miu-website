import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import Contact from '../src/components/contact';
import TopHome from '../src/components/top_home';
import WorkExperience from '../src/components/work_experience';

export default function WorkExperiencePage(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isTabletOrMobile ? "0" : "0 7.5%" }}>
        <WorkExperience />
        <Contact />
      </div>
    </div>
  );
}
