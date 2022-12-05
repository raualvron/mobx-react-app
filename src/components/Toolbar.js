import { observer } from "mobx-react";
import React from "react";
import { SNAPSHOTS_APP_ENUM } from "../constants/constans";
import { getSelectedBoxes, addBox, removeBoxes, changeColorBoxes, removeAllBoxes } from "../stores/controllers/box";
import { removeStore } from "../stores/controllers/snapshots";
import store from "../stores/MainStore";
function Toolbar() {

  const numSelBoxes = getSelectedBoxes()?.length;
  const {history: {canUndo, canRedo, redo, undo, clear}} = store;

  const onReset = () => {
    removeAllBoxes();
    removeStore(SNAPSHOTS_APP_ENUM);
    addBox();
    //At least one box.
    clear();
  }

  const onUndo = () => {
    canUndo && undo();
  }

  const onRedo = () => {
    canRedo && redo();
  }

  return (
    <div className="toolbar">
      <button onClick={addBox}> Add Box</button>
      <button disabled={!Boolean(numSelBoxes)} onClick={removeBoxes}>Remove Box</button>
      <input disabled={!Boolean(numSelBoxes)} type="color" onChange={(e) => changeColorBoxes(e.target.value)} />
      <button disabled={!Boolean(canUndo)} onClick={onUndo}>Undo</button>
      <button disabled={!Boolean(canRedo)} onClick={onRedo}>Redo</button>
      <button onClick={onReset}>Reset</button>
      <span>{numSelBoxes ? `${numSelBoxes} boxes selected` : `No boxes selected`}</span>
    </div>
  );
}

export default observer(Toolbar);
