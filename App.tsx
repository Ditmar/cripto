import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from "./src/screens/Clients";
import Order from "./src/screens/Order";
import Reports from "./src/screens/Reports";
import Icons from "react-native-vector-icons/AntDesign";
import MyColors from "./src/color/MyColors"
const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Clientes': {
              if (focused) {
                return <Icons name="smile-circle" size={23} color={MyColors.secondary} />;
              } else {
                return <Icons name="smile-circle" size={23} color={MyColors.thirth} />;
              }
            }
            case 'Pedidos': {
              if (focused) {
                return <Icons name="export" size={23} color={MyColors.secondary}/>;
              } else {
                return <Icons name="export" size={23} color={MyColors.thirth} />;
              }
            }
            case 'Reportes': {
              if (focused) {
                return (
                  <Icons name="table" size={23} color={MyColors.secondary} />
                );
              } else {
                return (
                  <Icons name="table" size={23} color={MyColors.thirth} />
                );
              }
            }
          }
        },
      })}
      >
        <Tab.Screen name="Clientes" component={Clients} />
        <Tab.Screen name="Pedidos" component={Order} />
        <Tab.Screen name="Reportes" component={Reports} />
      </Tab.Navigator>
    </NavigationContainer>)
  }
}
export default App;