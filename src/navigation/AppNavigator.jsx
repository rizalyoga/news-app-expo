import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screen/SplashScreen";
import HomeScreen from "../Screen/HomeScreen";
import SearchScreen from "../Screen/SearchScreen";
import DetailNewsScreen from "../Screen/DetailNewsScreen";
import WebviewScreen from "../Screen/WebviewScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="DetailNews" component={DetailNewsScreen} />
        <Stack.Screen name="WebviewNews" component={WebviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
