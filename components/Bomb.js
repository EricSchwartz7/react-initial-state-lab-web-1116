const React = require('react');
const ReactDOM = require('react-dom');

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    if (this.state.secondsLeft === 0){
      return <div className="bomb">Boom!</div>
    } else {
      return <div className="bomb">{this.state.secondsLeft} seconds left before I go boom!</div>
    }
  }
}

module.exports = Bomb
