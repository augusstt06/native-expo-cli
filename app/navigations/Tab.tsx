import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabMail } from "./childs";
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mail" component={TabMail} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
