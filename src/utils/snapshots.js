import { SNAPSHOTS_APP_ENUM } from "../constants/constans";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const getSnapshots = () => getLocalStorage(SNAPSHOTS_APP_ENUM);
export const setSnapshots = (data, action = null) => setLocalStorage(SNAPSHOTS_APP_ENUM, data, action);