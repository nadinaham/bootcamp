import React from 'react';

class CardViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            front:true,
            index:0,
            display:""
        }
        console.log("inside viewer 1");
        this.state.display = ""
        console.log("inside viewer 2");
    }
  render() {
    this.props.cards.length !== 0 ? this.state.display=this.props.cards[this.state.index].front : "";
    return (
        <div className={"container"}>
						<h1>Flashcards!!</h1>
                        Card {this.state.index + 1} out of {this.props.cards.length}
						<div>
						<table>
							<tbody>
								<tr>
									<td colspan="3">
										<h1>
											{this.state.display === "" ? "" : this.state.front ? this.props.cards[this.state.index].front : this.props.cards[this.state.index].back}	
										</h1>
									</td>
								</tr>
								<tr>
									<td><button onClick={this.lookAnswer}>{ this.state.display === "" ? "Add Card in Card Editor" : this.state.front ? "Answer" : "Question" }</button></td>
									<td><button onClick={this.incrementIndex}>Next Card</button></td>
                                    <td><button onClick={this.subtractIndex}>Previous Card</button></td>
								</tr>
							</tbody>
						</table>  
						</div>	
        <h2>console.log("Card"+progress+"out of"+)
        <h2>Card Viewer</h2>
        <hr />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
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

}

export default CardViewer;