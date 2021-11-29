import React from 'react';
import './CardViewer.css';

import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
      if (!isLoaded(this.props.cards)) {
        return <div>Loading...</div>;
      }
  
      if (isEmpty(this.props.cards)) {
        return <div>Page not found!</div>;
      }
  
      const card = this.props.cards[this.state.index][this.state.front ? 'front' : 'back'];    
      return (
            <div>
            <h2>{this.props.name}</h2>
            Card {this.state.index + 1} out of {this.props.cards.length}
            <div className="card" onClick={this.lookAnswer}>
                {card}
            </div>
            
            <br />
            
            <button onClick={this.subtractIndex} disabled={this.state.index===0}>Previous card</button>
            <button onClick={this.incrementIndex} disabled={this.state.index===this.props.cards.length-1}>Next card</button>	
            <hr />
            <Link to="/">Home</Link>
        </div>
    );
  }


}

const mapStateToProps = (state, props) => {
    const deck = state.firebase.data[props.match.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return { cards: cards, name: name };
  };
  
  export default compose(
    withRouter,
    firebaseConnect(props => {
      const deckId = props.match.params.deckId;
      return [{ path: `/flashcards/${deckId}`, storeAs: deckId }];
    }),
    connect(mapStateToProps),
  )(CardViewer);