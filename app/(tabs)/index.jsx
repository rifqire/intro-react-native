import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import COLORS from "../../constants/colors"
import { Ionicons } from "@expo/vector-icons"

// Index == Home
const Index = ({ infos }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/destinations?limit=20"
        )
        console.log(response)
        setPosts(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Text>Loading......</Text>
  if (error) return <Text>Error: {error.message}</Text>

  const renderItem = ({ item: post }) => (
    <View style={styles.postContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://avatar.iran.liara.run/public" }}
          style={styles.avatar}
        />
        <Text style={styles.bold}>fjellheisen</Text>
      </View>
      <Image
        source={{ uri: post.image }}
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
        420 likes
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>fjellheisen</Text> {post.name}, {post.country}
      </Text>
      <Text style={styles.text}>{post.description}</Text>
      <Text style={styles.footer}>Posted 69 minutes ago</Text>
    </View>
  )

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(post) => post.id.toString()}
    />
  )
}

export default Index

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
