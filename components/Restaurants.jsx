import React, { useLayoutEffect  } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Restaurants = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Restaurants Title',
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className={"flex-1 justify-center items-center"}>
      <Text className={"text-red-500"}>
        {/* Header */}
        <View>
          <Image />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default Restaurants
