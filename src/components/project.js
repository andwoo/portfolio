import React, { createRef } from 'react';
import { ColorLink } from './colorlink';
import Image from './image';
import styles from '../styles/project.module.scss';

export default class Project extends React.PureComponent{
  constructor(props) {
    super(props);
    this.link = createRef();
    this.state = {
      isHovered: false
    }
  }

  onMouseEnter = (event) => {
    this.setState({isHovered: true});
  }

  onMouseLeave = (event) => {
    this.setState({isHovered: false});
  }

  getHoverStyle = (defaultColor) => {
    return this.state.isHovered && this.link.current ? this.link.current.getHoverStyle() : { color: defaultColor };
  }

  render() {
    const { title, description, path, image, backgroundColor } = this.props;
    console.log(this.link.current ? this.link.current.getHoverStyle() : 'nothing');
    return (
      <figure>
        <ColorLink to={path} ref={this.link} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} color="#000000">
          <div
            className={styles.imageContainer}
            style={{ backgroundColor: backgroundColor }}
          >
            <Image className={styles.image} name={image} />
          </div>
          <figcaption className={styles.textContainer}>
            <p className={styles.title} style={this.getHoverStyle("#000000")}>{title}</p>
            <p className={styles.description} style={this.getHoverStyle("#757575")}>{description}</p>
          </figcaption>
        </ColorLink>
      </figure>
    );
  }
}