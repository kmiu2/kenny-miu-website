import Head from 'next/head';
import Contact from '../src/components/contact';
import useResponsive from '../src/components/helpers';
import TopHome from '../src/components/top_home';
import WorkExperience from '../src/components/work_experience';

export default function App(props: any) {
  const { isMobile } = useResponsive();

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isMobile ? "0" : "0 7.5%" }}>
        <WorkExperience />
        <Contact />
      </div>
    </div>
  );
}
