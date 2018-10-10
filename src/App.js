import React, { Component } from 'react';
import Card from "./Components/MatchCards/MatchCardJS";
import Wrapper from "./Components/Wrapper/Wrapper";
import Title from "./Components/Title/Title";
import cards from "./matches.json"
import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore){
      this.setState ({highscore: this.state.score}, function (){
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach( card => {
      card.count = 0;
    });

    alert(`Game Over \nScore: ${this.state.score}`);
    this.setState({score:0});
      
    };
  
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0){
          cards[i].count = cards[i].count +1;
          this.setState ({score: this.state.score + 1}, function (){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random())
          return true;
        } else {
          this.gameOver ();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Title score = {this.state.score} 
        highscore={this.state.highscore}> Bob's Burgers Memory Game
        </Title>
        {this.state.cards.map(card => (
          <Card
          clickCount = {this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
        </Wrapper>
    );
  }
}


export default App;
