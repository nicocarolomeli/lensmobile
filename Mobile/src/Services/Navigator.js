import { StackActions, NavigationActions } from 'react-navigation';

export default class Navigator {
    static goToRoute(routeName){
        return StackActions.reset({
            index: 0,
            routeName: routeName,
            actions: [
              NavigationActions.navigate({ routeName: routeName })
            ]
        });
    }

    static goToRouteWithParams(routeName, params){
        return StackActions.reset({
            index: 0,
            routeName: routeName,
            actions: [
              NavigationActions.navigate({ routeName: routeName, params: params})
            ]
        });
    }
}