import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from "react-native-heroicons/solid"
import { LocationMarkerIcon } from "react-native-heroicons/outline"

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
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: imgUrl
                }}
                className="w-64 h-36 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="pt-2 text-lg font-bold">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={"green"} opacity={0.5} size={22} />
                    <Text className="text-sm text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon color={"gray"} size={22} opacity={0.4} />
                    <Text className="text-sm text-gray-500">
                        Nearby . {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard