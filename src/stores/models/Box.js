import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: types.number,
    height: types.number,
    color: types.string,
    left: types.number,
    top: types.number,
    selected: types.boolean
  })
  .views(self => ({}))
  .actions((self) => ({
    changeSelection() {
      self.selected = !self.selected;
    },
    changeColor(color) {
      self.color = color;
    },
  }));

export default BoxModel;
