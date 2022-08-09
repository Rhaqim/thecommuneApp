import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <CategoryCard imgUrl={"https://links.papareact.com/gn7"} title="Testing" />
            <Text>Categories</Text>
        </ScrollView>
    )
}

export default Categories