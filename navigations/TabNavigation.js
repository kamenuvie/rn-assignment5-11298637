import React from 'react'
import{ StyleSheet,Text,View, Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cards from '../screens/Cards';
import Stats from '../screens/Stats';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
       <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}  options={{
            tabBarIcon:(focused)=>{
                return(
                    <View>
                        <Image source={require('../assets/assets/home.png')} />
                    </View>
                )
            }
        }} />
        <Tab.Screen name="Cards" component={Cards}
          options={{
            tabBarIcon:(focused)=>{
                return(
                    <View>
                        <Image source={require('../assets/assets/myCards.png')} />
                    </View>
                )
            }
        }} />
        <Tab.Screen name="Stats" component={Stats} 
          options={{
            tabBarIcon:(focused)=>{
                return(
                    <View>
                        <Image source={require('../assets/assets/statictics.png')} />
                    </View>
                )
            }
        }}/>
        <Tab.Screen name="Settings" component={Settings}  
          options={{
            tabBarIcon:(focused)=>{
                return(
                    <View>
                        <Image source={require('../assets/assets/settings.png')} />
                    </View>
                )
            }
        }}/>
       </Tab.Navigator>
    )
}

export default TabNavigation;

const styles = StyleSheet.create({});
