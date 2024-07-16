import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundedButton from '../../shared/components/RoundedButton'

const Profile = ({navigation}) => {
  return (
    <View>
      <RoundedButton title="Logout" onPress={() => navigation.navigate("Welcome")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})