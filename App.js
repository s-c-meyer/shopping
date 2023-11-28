import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

//import the screens
import ShoppingLists from "./components/shoppingLists";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDatfI1vTVFVD5W-NGX-AfmEq5Yp6ZPfgM",
    authDomain: "shopping-list-demo-983cc.firebaseapp.com",
    projectId: "shopping-list-demo-983cc",
    storageBucket: "shopping-list-demo-983cc.appspot.com",
    messagingSenderId: "461624817691",
    appId: "1:461624817691:web:cc1bec7b92fe1a517d60be"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud Firestore and get a reference to the service
  const db = getFireStore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShoppingLists"
      >
        <Stack.Screen
          name="ShoppingLists"
          component={ShoppingLists}
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
