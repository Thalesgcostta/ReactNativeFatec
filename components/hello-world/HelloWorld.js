import {View, Text} from 'react-native'
export default function HelloWorld(){
  return(
    <View style={{
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#ADD8E6"
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#6A5ACD",
        textTransform: "uppercase"
      }}>
        {'\n'}
        Hello World !!!!!!
      </Text>
    </View>
  )
}