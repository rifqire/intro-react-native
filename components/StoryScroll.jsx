import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import COLORS from "../constants/colors"

const StoryScroll = ({ image, username}) => {
  return (
    <View style={styles.storyContainer}>
      <Image
        source={{ uri: `${image}` }}
        style={styles.story}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 10, marginVertical: 5 }}>{username}</Text>
    </View>
  )
}

export default StoryScroll

const styles = StyleSheet.create({
  storyContainer: {
    width: 100,
    height: 120,
    objectFit: "cover",
    backgroundColor: COLORS.white,
    paddingBottom: 30,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  story: {
    width: 75,
    height: 75,
    objectFit: "cover",
    borderRadius: 100,
  },
})
