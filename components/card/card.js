import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const { imgUrl, size = medium, elem } = props;
  const [imgSrc, setimgSrc] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const handleOnError = () => {
    setimgSrc("/static/fellows.jpg");
  };
  const scale = elem === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <div className={styles.container}>
      <motion.div
        className={`${classMap[size]} ${styles.imgMotionWrapper}`}
        whileHover={scale}
      >
        <Image
          src={imgSrc}
          alt='image of a tv show'
          fill
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
