import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedButton from '../../shared/components/RoundedButton'

const Groups = ({navigation}) => {
  return (
    <View>
      <Text>Groups</Text>
      <RoundedButton title="My Groups" onPress={() => navigation.navigate("MyGroups")} />
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({})