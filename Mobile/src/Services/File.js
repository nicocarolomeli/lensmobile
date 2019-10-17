import RNFS from 'react-native-fs';

export default class File {
  static async convertPathToBase64(strPathFile){
    if(__DEV__){
      console.log("Entra convert base64");
    }
    return await RNFS.readFile(strPathFile, 'base64');
  } 

  static async deleteFile(strPathFile){
    if(__DEV__){
        console.log("Entra borrar archivo");
    }
    return await RNFS.unlink(strPathFile);
  }
}