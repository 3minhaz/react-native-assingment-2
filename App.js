import { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const RowView = ({label,value})=>{
  return(
    <View style={{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    marginBottom: 20
    }}>
      <View>
        <Text
        style={{
          color: 'white',
          fontSize: 12,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginRight: 10
        }}
        >{label}</Text>
      </View>
      <View>
        <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 2
        }}
        >{value}</Text>
      </View>
    </View>
  )  
}


export default function App() {

  const [open,setOpen] = useState(false)
  return (
    <SafeAreaView style={{flex:1}}>
    {/* <View style={styles.container}> */}
      <ImageBackground
      style={{flex: 1}}
       source={require('./assets/img-bg.png')}>
      <View style={{padding: 30, flex  :1,flexDirection: 'column', justifyContent: 'space-between'}}>
        {/* top part */}
      {open && 
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width:" 90%"}}>
        <Text style={{color: 'white'}}>
        “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
        </Text>
        <Text style={{color: 'white',fontWeight: 'bold',fontSize: 20}}>
          Ada Lovelace
        </Text>
        </View>
        <View>
          <Image source={require('./assets/Combined Shape (1).png')}/>
        </View>
      </View>
      }

      {/* bottom part */}
      <View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Image source={require('./assets/Path.png')}/>
        <Text style={{color: 'white', fontSize: 25, letterSpacing: 2, marginLeft: 20}}>Good Evening</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white',fontSize: 80, fontWeight: 'bold'}}>23:14</Text>
          <Text style={{color: 'white', position:'relative',top: 70, marginLeft: 20 }}>BST</Text>
        </View>
        <Text style={{color: 'white', letterSpacing: 2, fontWeight: '700',fontSize: 15}}>
          IN LONDON, UK
          </Text>
          <TouchableOpacity
          onPress={()=>setOpen(!open)}
          style={{
            paddingVertical: 10, 
            paddingLeft:20,marginTop: 50,
            width: '45%', color: 'white',flexDirection : 'row',alignItems: 'center',
            borderRadius: 50,backgroundColor: 'white'}}
            >
            <Text style={{color: '#000000', marginRight: 10, letterSpacing: 3,fontSize: 20,textTransform: 'uppercase'}}>
            {open ? 'More' : "Less"}

            </Text>
            <Image source={open ? require('./assets/Group 3.png') : require('./assets/Group 3 (1).png')}/>
          </TouchableOpacity>
        
      </View>

          
              
        </View>     
        {!open && 
            <View 
            style={{
              marginTop: 10,
              backgroundColor: '#000000BF',
            paddingVertical: 48,
            paddingHorizontal: 26,
            }}
            >
               <RowView label={'Current Timezone'} value='Europe/London'/>
             <RowView label={'Day of the Year'} value='295'/>
             <RowView label={'Day of the week'} value='5'/>
             <RowView label={'Week number'} value='42'/>

            </View>
            }   
       </ImageBackground>
    {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
