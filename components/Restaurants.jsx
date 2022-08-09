import React, { useLayoutEffect } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import Categories from './Categories'
import FeaturedRow from './FeaturedRow'

const Restaurants = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Restaurants Title',
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-3xl"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-900 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-gray-900 text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search Box */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color={'gray'} size={20} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>
        <AdjustmentsIcon />
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="bg-gray-100"
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid Placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id={2}
          title="Tasty Discounts"
          description="Paid Placements from our partners"
        />

        {/* Offers near you */}
        <FeaturedRow
          id={3}
          title="Offers near you"
          description="Paid Placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Restaurants
