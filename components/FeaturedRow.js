import { View, Text, ScrollView } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        // sanityClient.fetch(`*[_type == "restaurant" && _id == "${id}"]{name, description, image, _id}`).then((data) => {
        //     console.log(data)
        const id = "003581aa-2a54-4934-abc7-7fe476f6708b"
        sanityClient.fetch(`*[_type == "featured" && _id == "${id}"]
        {restaurants[]->
        }[0]`).then((data) => {
            setRestaurants(data?.restaurants)
        })
    }, [])

    console.log(restaurants)

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
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                    key={restaurant._id} 
                    title={restaurant.RestaurantName}
                    // imgUrl={restaurant.restaurantImage}
                    rating={restaurant.restaurantRating}
                    address={restaurant.restaurantAddress}
                    short_description={restaurant.shortDescription}
                    // genre={restaurant.genre}

                     />
                ))}
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