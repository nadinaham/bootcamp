import React from 'react';
import './Homepage.css';

import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render() {
        return(
        <div>
        <Link to="/editor">Go to card editor</Link>

        <Link to="/viewer">Go to card viewer</Link>
        </div>
        );
    }
}

export default Homepage;