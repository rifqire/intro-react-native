import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedButton from '../../shared/components/RoundedButton'
import MyAppBar from '../../shared/components/MyAppBar'

const Groups = ({navigation}) => {
  return (
    <View>
      <MyAppBar title="My Groups" />
      <RoundedButton title="Flat List" onPress={() => navigation.navigate("FlatList")} />
      <RoundedButton title="Section List" onPress={() => navigation.navigate("SectionList")} />
      <RoundedButton title="Scroll View" onPress={() => navigation.navigate("ScrollView")} />
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({})