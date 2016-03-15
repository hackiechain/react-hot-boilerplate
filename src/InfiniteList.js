import React, { Component,PropTypes } from 'react';
import Infinite from 'react-infinite';

export class ListItem extends Component {
  static propTypes = {
    index: PropTypes.any
  };

  render() {
    return <div className="infinite-list-item" style={
      {
      height: 50,lineHeight: "50px"
      }
    }>
      List Item {this.props.index}
    </div>;
  }
}


export default class InfiniteList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      elements: this.buildElements(0, 10),
      isInfiniteLoading: false
    };
  }

  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
      elements.push(<ListItem key={i} index={i}/>)
    }
    return elements;
  }

  handleInfiniteLoad() {
    console.log('handleInfiniteLoad');
    this.setState({
      isInfiniteLoading: true
    });
    setTimeout(() => {
      var elemLength = this.state.elements.length,
        newElements = this.buildElements(elemLength, elemLength + 10);
      this.setState({
        isInfiniteLoading: false,
        elements: this.state.elements.concat(newElements)
      });
    }, 2500);
  }

  elementInfiniteLoad() {
    return <div className="infinite-list-item">
      Loading...
    </div>;
  }

  render() {
    console.log("render", this.state.elements.length);

    return <Infinite className='infinite-example'
                     elementHeight={50}
                     containerHeight={250}
                     infiniteLoadBeginEdgeOffset={200}
                     onInfiniteLoad={()=>{this.handleInfiniteLoad()}}
                     loadingSpinnerDelegate={this.elementInfiniteLoad()}
                     isInfiniteLoading={this.state.isInfiniteLoading}>
      {this.state.elements}
    </Infinite>;
  }
}