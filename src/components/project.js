import React from 'react'
import { Link } from 'gatsby'
import Image from './image'
import styles from '../styles/project.module.scss'

export default ({title, description, path, image}) => {
  return (
    <figure>
      <Link className={styles.link} to={path}>
        <Image name={image}/>
        <figcaption className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </figcaption>
      </Link>
    </figure>
  )
}