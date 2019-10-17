import { Alert } from 'react-native';

export default class NetworkValidation {
  static thereIsAProblem(response, showAlert){
    thereIsAProblem = response.problem;

    if(response.problem === 'NETWORK_ERROR'){
      if(__DEV__){
        console.log("thereIsAProblem ---->>", thereIsAProblem, response);
      }
      if(showAlert === true){
        setTimeout(() => {
          Alert.alert('', 'Error de red. Intenta más tarde.',
                          [{text: 'Ok', onPress: () => null}],
                          { cancelable: false }
                         );
        }, 210);
      }      
    }else if(response.problem === 'CONNECTION_ERROR' || response.problem === 'TIMEOUT_ERROR'){
      if(__DEV__){
        console.log("thereIsAProblem ---->>", thereIsAProblem, response);
      }
      if(showAlert === true){
        setTimeout(() => {
          Alert.alert('', 'Se agotó el tiempo de espera. Intenta más tarde.',
                          [{text: 'Ok', onPress: () => null}],
                          { cancelable: false }
                        );
        }, 210);
      }
    }

    return thereIsAProblem;
  } 
}