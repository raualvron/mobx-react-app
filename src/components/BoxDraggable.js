import React from "react";
import { observer } from "mobx-react";
import { clickBox } from "../stores/controllers/box";
import interactBoxes from "../utils/interactBoxes";

function BoxDraggable(props) {
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    if (selected) {
      interactBoxes(selected.current);
    }
  }, [selected]);

  return (
    <div
      id={props.id}
      className="box draggable"
      onMouseEnter={() => setSelected(props.boxRef)}
      onMouseLeave={() => setSelected(null)}
      data-x={props.left}
      data-y={props.top}
      ref={props.boxRef}
      onClick={() => clickBox(props.box)}
      style={{
        border: props.selected ? '4px black dashed' : '',
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`
      }}
    >
      {props.children}
    </div>
  );
}

export default observer(BoxDraggable);
