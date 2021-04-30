import { useMediaQuery } from 'react-responsive';
import Contact from '../src/components/contact';
import TopHome from '../src/components/top_home';
import WorkExperience from '../src/components/work_experience';
import Head from 'next/head'

export default function App(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      {/* <title>Kenny Miu</title> */}
      <Head>
        <title>Kenny Miu</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>

      <TopHome />
      <div style={{
        padding: isTabletOrMobile
          ? "0"
          : "0 7.5%"
      }}>
        <WorkExperience />
        <Contact />
      </div>
    </div>
  );
}
