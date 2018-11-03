import React from "react";

let compStyle = {
  display: "inline-block",
  marginLeft: "auto",
  marginRight: "auto"
};
let btnStyle = {
  height: "25px",
  width: "70px",
  marginLeft: "5px",
  marginRight: "5px",
  marginTop: "10px"
};

function PetCompoent(props) {
  let localResult = null;
  let disabled = false;
  if (props.result !== "") {
    let localResultStyle = null;
    if (props.result === "loser") {
      localResultStyle = {
        color: "red"
      };
    } else {
      localResultStyle = {
        color: "green"
      };
    }
    localResult = <h2 style={localResultStyle}>{props.result}</h2>;
    disabled = true;
  }

  return (
    <div style={compStyle}>
      {localResult}

      {props.result ? (
        <h5>Likes : {props.likesCount}</h5>
      ) : (
        <h5>{props.petName} </h5>
      )}
      <img
        style={{ height: 150, width: 150 }}
        src={props.petImage}
        alt={"Cute" + props.petName}
      />
      <br />
      <button
        style={btnStyle}
        value={props.petName}
        onClick={props.onLikeBtnClick}
        disabled={disabled}
      >
        Like
      </button>
      <button
        style={btnStyle}
        value={props.petName}
        onClick={props.onDislikeBtnClick}
        disabled={disabled}
      >
        Dislike
      </button>
    </div>
  );
}

export default PetCompoent;
