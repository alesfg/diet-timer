import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import Badges from "./components/Badges";
import Profile from "./components/Profile";
import "react-native-gesture-handler";
import themes from "./components/themes";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          drawerActiveBackgroundColor: themes.colors.secundaryColor,
        }}
      >
        <Drawer.Screen
          name="Diet Timer"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: themes.colors.secundaryColor,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Drawer.Screen name="Badges" component={Badges} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
