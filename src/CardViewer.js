import React from 'react';
import './CardViewer.css';

class CardViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            front:true,
            index:0,
            display:""
        }
    }

lookAnswer = () => {
    this.setState(state => ({
        front: !state.front,
    }));
    
}

incrementIndex = () => {
    this.setState(state => ({
        index: state.index+1,
        front: true
    }));

}

subtractIndex = () => {
    this.setState(state => ({
        index: state.index-1,
        front: true
    }));
}

  render() {
      const card = this.props.cards[this.state.index][this.state.front ? 'front' : 'back'];    
      return (
        <div>
        Card {this.state.index + 1} out of {this.props.cards.length}
        <div className="card" onClick={this.lookAnswer}>
            {card}
        </div>
        
        <br />
        
        <button onClick={this.subtractIndex} disabled={this.state.index===0}>Previous card</button>
        <button onClick={this.incrementIndex} disabled={this.state.index===this.props.cards.length-1}>Next card</button>	

        <h2>Card Viewer</h2>
        <hr />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
  }


}

export default CardViewer;