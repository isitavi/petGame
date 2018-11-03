import React from "react";
import PetCompoent from "./PetComponent";
let style = {
  textAlign: "center",
  fontSize: "2em",
  color: "purple"
};

let btnStyle = {
  marginRight: "5px",
  marginLeft: "5px",
  marginTop: "30px"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: { likesCount: 0, result: "" },
      dog: { likesCount: 0, result: "" }
    };
    this.handelLike = this.handelLike.bind(this);
    this.handelDislike = this.handelDislike.bind(this);
    this.showWinner = this.showWinner.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }
  handelLike(event) {
    let petName = event.target.value;

    if (petName === "Cat") {
      this.setState(prevState => {
        return {
          cat: {
            likesCount: prevState.cat.likesCount + 1,
            result: prevState.cat.result
          }
        };
      });
    } else if (petName === "Dog") {
      this.setState(prevState => {
        return {
          dog: {
            likesCount: prevState.dog.likesCount + 1,
            result: prevState.dog.result
          }
        };
      });
    }
  }
  handelDislike(event) {
    let petName = event.target.value;
    if (petName === "Cat") {
      this.setState(prevState => {
        return {
          cat: {
            likesCount: prevState.cat.likesCount - 1,
            result: prevState.cat.result
          }
        };
      });
    } else if (petName === "Dog") {
      this.setState(prevState => {
        return {
          dog: {
            likesCount: prevState.dog.likesCount - 1,
            result: prevState.dog.re
          }
        };
      });
    }
  }
  showWinner() {
    let countCatLikes = this.state.cat.likesCount;
    let countDogLikes = this.state.dog.likesCount;
    let catResult = "TIE";
    let dogResult = "TIE";

    if (countCatLikes > countDogLikes) {
      catResult = "winner";
      dogResult = "loser";
    } else if (countDogLikes > countCatLikes) {
      dogResult = "winner";
      catResult = "loser";
    }
    this.setState(prevState => {
      return {
        cat: {
          likesCount: prevState.cat.likesCount,
          result: catResult
        },
        dog: {
          likesCount: prevState.dog.likesCount,
          result: dogResult
        }
      };
    });
  }
  gameOver() {
    this.setState({
      cat: { likesCount: 0, result: "" },
      dog: { likesCount: 0, result: "" }
    });
  }
  render() {
    return (
      <div>
        <h1 style={style}>Play and Enjoy</h1>
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <PetCompoent
            petName="Dog"
            likesCount={this.state.dog.likesCount}
            petImage="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            result={this.state.dog.result}
            onLikeBtnClick={this.handelLike}
            onDislikeBtnClick={this.handelDislike}
          />
          <PetCompoent
            petName="Cat"
            likesCount={this.state.cat.likesCount}
            petImage="https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg"
            result={this.state.cat.result}
            onLikeBtnClick={this.handelLike}
            onDislikeBtnClick={this.handelDislike}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          {!this.state.dog.result && (
            <button style={btnStyle} onClick={this.showWinner}>
              Show Winner
            </button>
          )}
          <button style={btnStyle} onClick={this.gameOver}>
            Start Over
          </button>
        </div>
      </div>
    );
  }
}

export default App;
