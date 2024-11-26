import {Stack} from 'expo-router'
import "../../global.css"

export default function RootLayout(){
    return(
     <Stack className="">
        <Stack.Screen name="index" options={{title:'12 Hours Hussle'}}  / >
        
    </Stack>
    );

}