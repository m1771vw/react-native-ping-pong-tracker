import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
const Button = (props) => {
    let { style, text, onPress } = props;
    return ( 
        <TouchableOpacity style={style} onPress={onPress}>
        <Text>{text}</Text>
         </TouchableOpacity>
     );
}
 
export default Button;