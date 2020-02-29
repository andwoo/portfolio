import React from 'react'
import { Link } from 'gatsby'
import Image from './image'
import styles from '../styles/project.module.scss'

export default ({title, path, image}) => {
  return (
    <div className={styles.container}>
      <Image name={image}/>
      <Link className={styles.link} to={path}>
        {title}
      </Link>
    </div>
  )
}