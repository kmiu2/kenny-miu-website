import Head from 'next/head';
import Contact from '../src/components/contact';
import useResponsive from '../src/components/helpers';
import Projects from '../src/components/projects';
import TopHome from '../src/components/top_home';

export default function ProjectsPage(props: any) {
  const { isMobile } = useResponsive();

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isMobile ? "0" : "0 7.5%" }}>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
