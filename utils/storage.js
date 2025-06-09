import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@last_location';

export const saveLocation = async (loc) => {
  try { await AsyncStorage.setItem(KEY, JSON.stringify(loc)); }
  catch(e){ console.error(e); }
};

export const getLocation = async () => {
  try { const json = await AsyncStorage.getItem(KEY);
    return json ? JSON.parse(json) : null;
  } catch(e){ console.error(e); return null; }
};