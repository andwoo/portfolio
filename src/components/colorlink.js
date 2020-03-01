import React from 'react';
import { Link } from 'gatsby';

const COLORS = [
  "#f25d5d",
  "#faa83c",
  "#8ecc7e",
  "#548ddb",
];



var COLOR_INDEX = 0;

class ColorChange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  nextColor = () => {
    if(++COLOR_INDEX > COLORS.length - 1) {
      COLOR_INDEX = 0;
    }
    return COLOR_INDEX;
  }

  onMouseEnter = (event) => {
    this.setState({color: COLORS[this.nextColor()]}, () => {
      this.props.onMouseEnter && this.props.onMouseEnter();
    });
  }

  onMouseLeave = (event) => {
    this.setState({color: this.props.color}, () => {
      this.props.onMouseLeave && this.props.onMouseLeave();
    });
  }
  
  getHoverStyle = () => {
    return { color: this.state.color };
  }
}

export class ColorLink extends ColorChange {
  render() {
    return (<Link className={this.props.className} to={this.props.to} style={this.getHoverStyle()} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.children}</Link>);
  }
}

export class ColorLinkA extends ColorChange {
  render() {
    return (<a className={this.props.className} href={this.props.to} style={this.getHoverStyle()} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.children}</a>);
  }
}