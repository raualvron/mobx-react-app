import { SNAPSHOTS_APP_ENUM } from "../../constants/constans";
import { removeLocalStorage } from "../../utils/localStorage";
import { getSnapshots } from "../../utils/snapshots";

export const getStore = () => {
    const snapshots = getSnapshots();
    let snapshot = {};
    let posSnapshots = 0;
    if(snapshots) {
        posSnapshots = snapshots.length - 1;
        snapshot = snapshots[posSnapshots];
    }
    return snapshot;
};

export const removeStore = () => removeLocalStorage(SNAPSHOTS_APP_ENUM);