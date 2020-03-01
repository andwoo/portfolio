import React from 'react';
import { Link } from 'gatsby';
import Image from './image';
import styles from '../styles/project.module.scss';

export default ({ title, description, path, image, backgroundColor }) => {
  return (
    <figure>
      <Link to={path}>
        <div
          className={styles.imageContainer}
          style={{ backgroundColor: backgroundColor }}
        >
          <Image className={styles.image} name={image} />
        </div>
        <figcaption className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </figcaption>
      </Link>
    </figure>
  );
};
