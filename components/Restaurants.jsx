import React, { useLayoutEffect } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from 'react-native-heroicons/outline'
import Categories from './Categories'

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
            uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
          <SearchIcon color={"gray"} size={20} />
          <TextInput
            placeholder="Restaurants"
            keyboardType='default'
          />
        </View>
        <AdjustmentsIcon />
      </View>

      {/* Body */}
      <ScrollView 
      contentContainerStyle={{paddingBottom: 100}}
      className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}

      </ScrollView>
    </SafeAreaView>
  )
}

export default Restaurants
