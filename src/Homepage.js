import React from 'react';
import './Homepage.css';

import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render() {
        const decks = Object.keys(this.state.homepage).map(deckId => {
            
            const deck = this.state.homepage[deckId];

            return (
            <div key={deckId}>
                <Link to={`/viewer/${deckId}`}>{deck.name}</Link>
            </div>
            );
        });

        return(
        <div>
        <h3>Flashcard Decks</h3> {decks}
        <Link to="/editor">Go to card editor</Link>
        <Link to="/viewer">Go to card viewer</Link>
        </div>
        );
    }
}

export default Homepage;