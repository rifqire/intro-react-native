import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

const MyProfileCard = ({email, status}) => {
  return (
    <View style={styles.container}>
      <View>

      </View>
      <View>
          <Text style={styles.header}>Mark Zuckerberg</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{status}</Text>
      </View>
    </View>
  )
}

export default MyProfileCard

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "start",
    },
    header: {
        fontSize: 18,
        marginBottom: 5,
        color: COLORS.black
    },
    text: {
        fontSize: 12,
        letterSpacing: 0.25,
        color: COLORS.gray,
        marginBottom: 5,
    }
})