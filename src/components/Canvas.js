import React from "react";

import { observer } from "mobx-react";
import Box from "../components/Box";
import { getAllBoxes } from "../stores/controllers/box";

function Canvas() {
  const boxes = getAllBoxes();
  const boxesLength = boxes.length;
  const [boxRefs, setBoxesRef] = React.useState([]);

  React.useEffect(() => {
    setBoxesRef((boxRefs) =>
      Array(boxesLength)
        .fill()
        .map((_, i) => boxRefs[i] || React.createRef()),
    );
  }, [boxesLength]);

  return (
    <div className="canva">
      {boxes.map((box, index) => (
        <Box
          id={box.id}
          key={index}
          boxRef={boxRefs[index]}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          selected={box.selected}
          box={box}
        />
      ))}
    </div>
  );
}

export default observer(Canvas);
