import React from "react";

const NoPlayerList = ({ addPlayer }) => {
  return (
    <div className="container no-list-player">
      <h4 className="no-player">No players in list!</h4>
      <p className="description">Click add player button to add players</p>
      <button onClick={() => addPlayer()} className="add-button">
        + Add player
      </button>
    </div>
  );
};

export default NoPlayerList;
