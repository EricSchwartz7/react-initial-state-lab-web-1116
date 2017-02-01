const React = require('react');
const ReactDOM = require('react-dom');

class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    return (
      <div className="image-slider">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

module.exports = ImageSlider
