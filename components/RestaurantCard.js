import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RestaurantCard = ({ id, 
    imgUrl, 
    title, 
    rating, 
    genre, 
    address, 
    short_description, 
    dishes, 
    long, 
    lat }) => {
    return (
        <TouchableOpacity>
            <Image 
            source={{
                uri: imgUrl
            }}
            className="w-64 h-36 rounded-sm"
            />
            <View>
                <Text className="text-sm font-bold">{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard