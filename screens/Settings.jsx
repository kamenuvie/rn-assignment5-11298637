import React from 'react'
import{StyleSheet,Switch,Text,View, useColorScheme} from 'react-native'

function Settings() {
    const {colorScheme, toggleColorScheme} = useColorScheme()

    return (
        <View style={styles.container}>
            <View style={styles.mega_container} >
        
            <View style={styles.mini_container} >
            <Text  style={styles.setting}>Settings</Text>
            </View>

           
           
        </View>
        <View  style={styles.menu}>
        <View  style={styles.Language}>
            <Text  style={styles.Language1}> Language</Text>
        </View>
        <View  style={styles.Profile}>
            <Text  style={styles.Profile1}>Profile </Text>
        </View>
        <View  style={styles.contact}>
            <Text  style={styles.Contact1}> Contact  Us</Text>
        </View>
        <View  style={styles.Password}>
             <Text  style={styles.Password1}> Change Password</Text>
        </View>
        <View  style={styles.Privacy}>
            <Text  style={styles.Privacy1}> Privacy  Policy </Text>
        </View>

            </View>
         <View  style={styles.theme}>
            <Text  style={styles.theme1}>Theme</Text>
        <Switch value={0} onChange ={()=>{}}/>
        </View>
        </View>
    );
}

export default Settings;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#eefefef',
        borderWidth:1,
    },
    mega_container:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginBottom:10,
        // borderWidth:1,

    },
    setting: {
        fontSize:25,
        fontWeight:'bold',
        padding:10,
        marginBottom:10
    },
    mini_container:{
        width:'100%',
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:70,
    },
   menu:{
    width:'100%',
    height:'50%',

    marginTop:40,
    borderRadius:10,
    alignItems:'left',
   
   },
   Language:{
    width:'100%',
    height:70,
    alignItems:'Left',
    justifyContent:'center',
   },

   Language1:{
    fontSize:18,
    // padding:10,
   
   },
   Profile1:{
    fontSize:18,
    // padding:11,
   },
   Privacy1:{
    fontSize:18,
    // padding:10,
   },
   Privacy:{
    width:'100%',
    height:70,
    alignItems:'Left',
    justifyContent:'center',
    marginBottom:10,
    // borderWidth:1,
   },
   Profile1:{
    fontSize:18,
    // padding:10,
   },
   Profile:{
    width:'100%',
    height:70,
    alignItems:'Left',
    justifyContent:'center',
   

   },
   Contact1:{
    fontSize:18,
    // padding:10,

   },
  contact:{
    width:'100%',
    height:70,
    alignItems:'Left',
    justifyContent:'center',
    textDecorationLine : 'underline',

  
   },
   Password1:{
    fontSize:18,
    // padding:10,
   },
   Password:{
    width:'100%',
    height:70,
    alignItems:'Left',
    justifyContent:'center',
   
   },
   theme1:{
    fontSize:20,
   },
   theme:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    marginTop:50
   }

})