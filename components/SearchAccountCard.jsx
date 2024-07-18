import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import COLORS from "../constants/colors"

const SearchAccountCard = ({image, name, desc, followers}) => {
  return (
    <View style={styles.postContainer}>
      <Image
        source={{ uri: `${image}` }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.searchDetails}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text style={{ color: COLORS.gray }}>{desc}</Text>
        <Text style={{ color: COLORS.gray }}>{followers} followers</Text>
      </View>
    </View>
  )
}

export default SearchAccountCard

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: "center",
  },
  searchDetails: {
    marginLeft: 18,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    objectFit: "cover",
  },
})
