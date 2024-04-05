import { Link } from "expo-router";
import { Text, View } from "react-native";



const index = () => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text
             style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center'
             }}
            >
                Welcome to the Google forms clone
            </Text>
            <Link 
                style={{
                    marginTop:20,
                    padding:10,
                    backgroundColor:'#673AB8', // Set the background color here
                    color:'white',
                    borderRadius:5,
                    width: 100,
                    textAlign: 'center'
                }}
                href={'/checkout'}>
                Start
            </Link>
        </View>
    )
}

export default index;