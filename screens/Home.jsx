import React from 'react'
import{StyleSheet,Text,View, Image, TextInputComponent} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home =()=>{
    return(
        <View style={styles.Big_container}>

            {/*========header------------ */}
        <View style={styles.container}>
            <View style={styles.imageCont}>
            <Image style={styles.Image1} source={require('../assets/assets/profile.png')} />
            
         </View>
         <View style={styles.Text}>
            <Text style={styles.Welcome} >Welcome Back </Text>
            <Text style={styles.Name}>Eric Atsu </Text>
            
         </View>
         <View style={styles.search_bar}>
            <Image style={styles.Image} source={require('../assets/assets/search.png')} />
            
         </View>

        </View>

                    {/*========card section------------ */}

        <View style={styles.card}>
            <Image style={styles.Card1} source={require('../assets/assets/Card.png')} />
            
         </View>

                     {/*========card components------------ */}
        <View style={styles.mini_container}>
        <View style={styles.box1}>
        <Image style={styles.send} source={require('../assets/assets/send.png')} />

        </View>
       

        <View style={styles.box2}>
        <Image style={styles.receive} source={require('../assets/assets/recieve.png')} />

        </View>

        <View style={styles.box3}>
        <Image style={styles.loan} source={require('../assets/assets/loan.png')} />

        </View>

        <View style={styles.box4}>
        <Image style={styles.topUp} source={require('../assets/assets/topUp.png')} />

        </View>
        </View>
        <View style={styles.Text_box1}>
      <Text styles= {styles.sent1}> Sent </Text>
      <Text> Receive </Text>
      <Text> Loan </Text>
      <Text> TopUp </Text>

      </View>
         {/*====== description======*/}
       <View style={styles.description}>
       <Text  style={styles.transaction}> Transactions </Text>
       <Text  style={styles.See }> See All.. </Text>
       </View>
                {/*======transaction category======*/}

    <View style={styles.mini_container2}>
        <View style={styles.photo}>
        <Image style={styles.apple} source={require('../assets/assets/apple.png')} />

        </View>
        <View style={styles.category}>
        <Text style={styles.AppleStore}>Apple Store</Text>
        <Text> Entertainment</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.Money}>-$ 5,99 </Text>
        </View>
    </View>

    <View style={styles.mini_container2}>
        <View style={styles.photo}>
        <Image style={styles.spotify} source={require('../assets/assets/spotify.png')} />

        </View>
        <View style={styles.category}>
        <Text style={styles.AppleStore}>Spotify</Text>
        <Text> Music</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.Money}>-$ 12,99 </Text>
        </View>
    </View>

    <View style={styles.mini_container2}>
        <View style={styles.photo}>
        <Image style={styles.money_trans} source={require('../assets/assets/moneyTransfer.png')} />

        </View>
        <View style={styles.category}>
        <Text style={styles.Momo}>Money Transfer</Text>
        <Text> Transaction</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.MoneyD}>-$ 300 </Text>
        </View>
    </View>

    <View style={styles.mini_container2}>
        <View style={styles.photo}>
        <Image style={styles.grocery} source={require('../assets/assets/grocery.png')} />

        </View>
        <View style={styles.category}>
        <Text style={styles.AppleStore}>Grocery</Text>
        <Text> Shopping</Text>
        </View>
        <View style={styles.price}>
        <Text style={styles.Money}>-$ 88 </Text>
        </View>
    </View>
        </View>
        
    )
}

export default Home;
const styles = StyleSheet.create({
    Big_container:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:'#fff'
    },
    container:{
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        marginBottom:20,
    },
    imageCont:{
        width: '15%',
        height: '80%',
        borderRadius:100,
        
        backgroundColor:'#eee'

    },
    Text:{
        height: '50%',
        marginRight:100,
    },
    search_bar: {
        width: '10%',
        height: '60%',
        borderRadius:100,
        backgroundColor:'#eee'

    },
    Welcome:{
        fontSize:15,
    },
    Name:{
        fontSize:25,
        fontWeight:'bold'
    },
    Image:{
        width: 40,
        height: 40,
        borderWidth: 1,
    },
    Image1:{
        width: 60,
        height: 60,
        borderWidth: 1,
        
    },
    card:{
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
      
        marginBottom:10
    },
    mini_container: {
        width: '80%',
        height: '8%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        marginLeft:40
    },
    box1:{
        width: '20%',
        height: '100%',
        borderRadius:100,
        paddingTop:7,
        alignItems:'center',
        backgroundColor:'#eee'
    },
    box2:{
        width: '20%',
        height: '100%',
        borderRadius:100,
        paddingTop:7,
        alignItems:'center',
        backgroundColor:'#eee'
    },
    box3:{
        width: '20%',
        height: '100%',
        borderRadius:100,
        paddingTop:7,
        
        alignItems:'center',
        backgroundColor:'#eee'
    },
    box4:{
        width: '20%',
        height: '100%',
        borderRadius:100,
        paddingTop:7,
        
        alignItems:'center',
        backgroundColor:'#eee'
    },
    Text_box1:{
        width: '80%',
        height: '5%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        marginLeft:45,
        marginBottom:20
    },
    send:{
        width: 30,
        height: 40,
        textDecoration: 'underline',
    },
    receive:{
        width: 30,
        height: 40,
    },
    loan:{
        width: 40,
        height: 40,
    },
    topUp:{
        width: 40,
        height: 40,
        paddingRight:10,
    },
    sent:{
        fontSize:15,
        fontWeight:'bold',
        borderWidth:1,
    },
    description:{
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        
        marginBottom:10
    }, transaction:{
        fontSize:15,
        fontWeight:'bold',
    },
    See:{
        fontSize:15,
        color:'blue',
        fontWeight:'bold',
        textDecorationLine : 'underline',

    },
    mini_container2:{
        width: '80%',
        height: '9%',
        flexDirection: 'row',
        justifyContent:'space-around',
        marginLeft:40,
  },
  photo:{
    width: '15%',
    height: '80%',
    borderRadius:100,
    alignItems:'center',
    backgroundColor:'#eee'
  },
  category:{
    width: '40%',
    height: '80%',
    borderRadius:10,
    alignItems:'left',
    marginRight:30,
  },
  price:{
    width: '20%',
    height: '80%',
    borderRadius:10,
    alignItems:'center',
  },
  apple: {
    width: 30,
    height: 35,
    marginTop:5,
    borderRadius:30,
  },
  AppleStore:{
    fontWeight:'bold',
  },
  Money:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:14
  },
  spotify: {
    width: 30,
    height: 33,
    marginTop:10,
    backgroundColor:'#eee',
    borderRadius:30,
  },
  grocery: {
    width: 30,
    height: 30,
    marginTop:10,
    backgroundColor:'#eee',
    borderRadius:30,
  },
  money_trans: {
    width: 30,
    height: 30,
    marginTop:10,
    backgroundColor:'#eee',
    borderRadius:10,
  },
  Momo:{
    fontWeight:'bold',
    marginTop:10
  },
  MoneyD:{
    fontSize:15,
    fontWeight:'bold',
    color:'blue',
 
  },
})