import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import COLORS from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"

const PostDetail = ({ avatar, username, image, likes, p1, p2, time }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: `${avatar}` }} style={styles.avatar} />
        <Text style={styles.bold}>{username}</Text>
      </View>
      <Image
        source={{ uri: `${image}` }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          <Ionicons name="chatbubble-outline" size={24} color={COLORS.black} />
          <Ionicons name="paper-plane-outline" size={24} color={COLORS.black} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="bookmark-outline" size={24} color={COLORS.black} />
        </View>
      </View>
      <Text
        style={{ fontWeight: "bold", marginHorizontal: 18, marginBottom: 5 }}
      >
        {likes} likes
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>{username}</Text> {p1}
      </Text>
      <Text style={styles.text}>{p2}</Text>
      <Text style={styles.footer}>Posted {time} ago</Text>
    </View>
  )
}

export default PostDetail

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "start",
    marginHorizontal: 18,
    paddingTop: 10,
    marginVertical: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
  },
  postContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: 0,
    paddingBottom: 18,
  },
  image: {
    width: "100%",
    height: 280,
    backgroundColor: COLORS.primary,
    objectFit: "cover",
  },
  avatar: {
    width: 35,
    height: 35,
    marginVertical: 15,
    marginLeft: 18,
    marginRight: 10,
  },
  text: {
    fontWeight: "normal",
    marginBottom: 5,
    marginHorizontal: 18,
  },
  footer: {
    fontSize: 10,
    fontWeight: "normal",
    marginVertical: 5,
    marginHorizontal: 18,
  },
})
