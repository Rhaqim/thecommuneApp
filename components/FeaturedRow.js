import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={"#00CCBB"} />
            </View>
            <Text className="text-sm px-4 text-gray-500">{description}</Text>
            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="pt-4"
            >
                {/* Resturant Cards */}
                <RestaurantCard
                    id={12}
                    imgUrl={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    // imgUrl={"https://links.papareact.com/gn7"}
                    title="Shiro Lagos"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main street"
                    short_description="Japanese themed restaurant in Lagos"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={12}
                    imgUrl={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    // imgUrl={"https://links.papareact.com/gn7"}
                    title="Shiro Lagos"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main street"
                    short_description="Japanese themed restaurant in Lagos"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={12}
                    imgUrl={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    // imgUrl={"https://links.papareact.com/gn7"}
                    title="Shiro Lagos"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main street"
                    short_description="Japanese themed restaurant in Lagos"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={12}
                    imgUrl={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    // imgUrl={"https://links.papareact.com/gn7"}
                    title="Shiro Lagos"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main street"
                    short_description="Japanese themed restaurant in Lagos"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow