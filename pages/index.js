import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/navbar/navbar";
import { magic } from "../lib/magic-client";
import {
  getPopularVideos,
  getVideos,
  getWatchItAgainVideos,
} from "../lib/videos";
import SectionCards from "../components/card/section-card";
import { verifyToken } from "../lib/utils";

export async function getServerSideProps(context) {
  const token = context.req ? context.req?.cookies.token : null;
  const userId = await verifyToken(token);

  if (!userId) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);

  const webDevVideos = await getVideos("web development");
  const reactVideos = await getVideos("React");
  const javascriptVideos = await getVideos("javascript");
  const codingMusicVideos = await getVideos("coding music");
  return {
    props: {
      webDevVideos,
      reactVideos,
      javascriptVideos,
      codingMusicVideos,
      watchItAgainVideos,
    },
  };
}

export default function Home({
  webDevVideos,
  reactVideos,
  javascriptVideos,
  codingMusicVideos,
  watchItAgainVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflyx YT VIDS</title>
      </Head>
      <Banner
        title='Fellows of the ring'
        subTitle='guys frrom another planet'
        imgUrl='/static/fellows.jpg'
        videoId='4zH5iYM4wJo'
      />
      <div className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title='Watch it again'
            videos={watchItAgainVideos}
            size='small'
          />
          <SectionCards title='Sci-fi' videos={webDevVideos} size='medium' />

          <SectionCards
            title='Web development'
            videos={reactVideos}
            size='small'
          />
          <SectionCards title='React' videos={javascriptVideos} size='medium' />
          <SectionCards
            title='Coding music'
            videos={codingMusicVideos}
            size='small'
          />
        </div>
      </div>
    </div>
  );
}
