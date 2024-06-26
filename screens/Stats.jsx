import React from 'react'
import{StyleSheet,Text,View} from 'react-native'

const Stats =()=>{
    return(
        <View style={styles.container}>
            <Text>Stats</Text>
        </View>
    )
}

export default Stats;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ccc'
    }
})