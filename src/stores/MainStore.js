import { onSnapshot, types } from "mobx-state-tree";
import { UndoManager } from "mst-middlewares";
import { SNAPSHOTS_APP_ENUM } from "../constants/constans";
import { isEmptyObject } from "../utils/getUtils";
import { setLocalStorage } from "../utils/localStorage";
import { generateBox } from "./controllers/box";
import { getStore } from "./controllers/snapshots";
import BoxModel from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    history: types.optional(UndoManager, {}),
  })
  .actions(self => ({
    addBox(box) {
      self.boxes.push(box);
    },
    removeBox(index) {
      self.boxes.splice(index, 1);
    },
    getBoxes() {
      return self.boxes;
    },
    removeAll() {
      self.boxes = [];
    }
  }))
  .views(self => ({
    get getSelectedBoxes() {
      return self.boxes.filter(({ selected }) => selected);
    }
  })
  );

const currentStore = getStore();
const store = MainStore.create(currentStore);

onSnapshot(store, snapshot => {
  console.log('onSnapshot');
  setLocalStorage(SNAPSHOTS_APP_ENUM, snapshot)
});
const box1 = BoxModel.create(generateBox());
isEmptyObject(currentStore) && store.addBox(box1);

export default store;