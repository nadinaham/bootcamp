import React from 'react';
import './Homepage.css';

import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import 'firebase/functions'


// async componentDidMount() {
//   const getHomepage = this.props.firebase
//     .functions()
//     .httpsCallable('getHomepage');
//   const homepage = await getHomepage();
//   this.setState({ homepage: homepage.data });
// }

const Homepage = props => {
  if (!isLoaded(props.homepage)) {
    return <div>Loading...</div>;
  }
  
    const decks = Object.keys(props.homepage).map(deckId => {
      return (
        <div key={deckId}>
          <Link to={`/viewer/${deckId}`}>{props.homepage[deckId].name}</Link>
        </div>
      );
    });
  
    return (
      <div>
        <h2>Homepage</h2>
        <Link to="/editor">Create a new flashcards deck!</Link>
        <h3>Flashcards</h3>
        {decks}
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return { homepage: state.firebase.data.homepage };
  };
  
  export default compose(
    firebaseConnect(['/homepage']),
    connect(mapStateToProps),
  )(Homepage);