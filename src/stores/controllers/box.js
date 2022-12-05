import uuid from "uuid/v4";
import getRandomColor from "../../utils/getRandomColor";
import getRandomIntergers from "../../utils/getRandomIntergers";
import store from "../MainStore";
import BoxModel from "../models/Box";

export const generateBox = () => BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    width: getRandomIntergers(100, 150),
    height: getRandomIntergers(100, 150),
    left: getRandomIntergers(0, 1000),
    top: getRandomIntergers(400, 500),
    selected: false
});

export const clickBox = (box) => box.changeSelection();
export const addBox = () => {
    store.addBox(generateBox());
};
export const removeBoxes = () => {
    const selected = getSelectedBoxes();
    const boxes = getAllBoxes();
    selected.forEach(({ id }) => {
        const index = boxes.findIndex(({ id: uid }) => id === uid);
        store.removeBox(index);
    });
}
export const changeColorBoxes = (color) => {
    const selected = getSelectedBoxes();
    selected.forEach((box) => box.changeColor(color));
}
export const getSelectedBoxes = () => store.getSelectedBoxes
export const getAllBoxes = () => store.getBoxes();
export const removeAllBoxes = () => store.removeAll();