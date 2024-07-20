import { Image, StyleSheet, Text, View, Linking, Pressable } from "react-native"
import React from "react"
import COLORS from "../constants/colors"

const MyProfileCard = ({
  name,
  desc,
  url,
  postsAmount,
  followersAmount,
  followingAmount,
}) => {
  const openLink = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url)
        } else {
          return Linking.openURL(url)
        }
      })
      .catch((err) => console.error("An error occurred", err))
  }
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://avatar.iran.liara.run/public" }}
          style={styles.avatar}
        />
        <View style={styles.followers}>
          <Text style={styles.followerHeading}>{postsAmount}</Text>
          <Text style={styles.followerText}>Posts</Text>
        </View>
        <View style={styles.followers}>
          <Text style={styles.followerHeading}>{followersAmount}</Text>
          <Text style={styles.followerText}>Followers</Text>
        </View>
        <View style={styles.followers}>
          <Text style={styles.followerHeading}>{followingAmount}</Text>
          <Text style={styles.followerText}>Following</Text>
        </View>
      </View>
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.text}>{desc}</Text>
        <Pressable onPress={() => openLink(url)}>
          <Text style={styles.url}>{url}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default MyProfileCard

const styles = StyleSheet.create({
  followers: {
    flexDirection: "column",
    alignItems: "center",
  },
  followerHeading: {
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  followerText: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
  },
  avatar: {
    width: 85,
    height: 85,
    objectFit: "cover",
    borderRadius: 100,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "start",
  },
  header: {
    fontSize: 16,
    marginBottom: 2,
    color: COLORS.black,
    fontFamily: "Roboto_500Medium",
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.25,
    color: COLORS.gray,
    marginBottom: 2,
    fontFamily: "Roboto_400Regular",
  },
  url: {
    fontSize: 14,
    letterSpacing: 0.25,
    color: COLORS.primary,
    marginBottom: 2,
    fontFamily: "Roboto_400Regular",
  },
})
