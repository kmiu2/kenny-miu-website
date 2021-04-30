import Head from 'next/head';
import Contact from '../src/components/contact';
import useResponsive from '../src/components/helpers';
import Showcase from '../src/components/showcase';
import TopHome from '../src/components/top_home';

export default function ShowcasePage(props: any) {
  const isMobile = useResponsive(1224);

  return (
    <div>
      <Head>
        <title>Kenny Miu</title>
      </Head>
      <TopHome />
      <div style={{ padding: isMobile ? "0" : "0 7.5%" }}>
        <Showcase />
        <Contact />
      </div>
    </div>
  );
}
