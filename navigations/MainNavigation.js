import React from 'react'
import{StyleSheet,Text,View} from 'react-native'
import{NavigationContainer} from '@react-navigation/native'
import TabNavigation from './TabNavigation'

const MainNavigation = () => {
    return(
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer> 
    )
}

export default MainNavigation;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})