import Link from "next/link";
import Card from "./card";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, indx) => {
          return (
            <Link key={indx} href={`/video/${video.id}`}>
              <Card elem={indx} imgUrl={video.imgUrl} id={indx} size={size} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default SectionCards;
