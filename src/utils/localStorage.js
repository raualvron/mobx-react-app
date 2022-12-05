export const setLocalStorage = (localKey, data, doConcat = true) => {
    let store = data;
    if(doConcat) {
        store = concatLocalStorage(localKey, data)
    } 
    localStorage.setItem(localKey, JSON.stringify(store));
}

export const getLocalStorage = (key) => {
    const store = localStorage.getItem(key);
    if (!store) {
        return;
    }
    return JSON.parse(store);
}

export const removeLocalStorage = (key) => localStorage.removeItem(key);

const concatLocalStorage = (key, data) => {
    const previousData = getLocalStorage(key) || [];
    const newLocalStorage = []
    if (previousData.length) {
        previousData.forEach(data => {
            newLocalStorage.push(data);
        });
    }
    newLocalStorage.push(data);
    return newLocalStorage;
}