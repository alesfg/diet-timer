import storage from "../storage/storage";
export async function loadData(datakey, dataId) {
  //returns data

  let data;

  storage.load({
    key: datakey,
    id: dataId,
  });

  data = await storage.getAllDataForKey(datakey);

  return data;
}
export function saveData(data, dataKey, dataId) {
  storage.save({
    key: dataKey, // Note: Do not use underscore("_") in key!
    id: dataId,
    data: data,
    expires: null,
  });
}
