import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{
                    uri: imgUrl,
                }}
                // style={{ width: 70, height: 70, borderRadius: 35 }}
                className="w-20 h-20 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard