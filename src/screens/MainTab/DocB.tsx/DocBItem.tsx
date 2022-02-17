import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'

function _getColorFromStatus(status) {
    
    if(status.toLowerCase().trim() == 'available') {
        return 'red'
    } else if(status.toLowerCase().trim() == 'unavailable') {
        return 'green'
    }
    return 'red'
}

function DocBItem(props) {
    let { 
        name, 
        status, 
        url, 
        phonenumber, 
        email,
        address,        
    } = props.food //destructuring an object    
    const {onPress} = props
    debugger
    return ( <TouchableOpacity 
        onPress={onPress}
        style={{
        height: 150,                 
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 9,
        
    }}>
        <Image 
            style={{
                width: 100, 
                height: 100,
                resizeMode: 'cover',
                borderRadius: 90,
                marginRight: 15,
                borderWidth: 3,
            }}
            source={{
                uri: url
        }} />
        <View style={{                    
            flex: 1,
            marginRight: 10,
            
        }}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',                        
            }} />
            
            <View style={{flexDirection: 'row'}}>
                <Text style={{
                }}>Status: </Text>
                <Text style={{
                    color: _getColorFromStatus(status),
                }}>{status.toUpperCase()}</Text>
            </View>

            <Text style={{
            }}>Phone number: {phonenumber}</Text>

            <Text style={{
            }}>Email: {email}</Text>

            <Text style={{
            }}>Address: {address}</Text>
        </View>                
    </TouchableOpacity>)
}
export default DocBItem