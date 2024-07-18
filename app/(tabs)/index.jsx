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
        <Text>@taaarannn</Text>
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
      <Text style={styles.text}>
        {post.name}, {post.country}
      </Text>
      <Text style={styles.text}>{post.description}</Text>
      <Text style={styles.footer}>Posted 30 minutes ago</Text>
    </View>
  )

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(post) => post.id.toString()}
      contentContainerStyle={styles.listContentContainer}
    />
  )
}

export default Index

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "start",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
  },
  postContainer: {
    backgroundColor: COLORS.white,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 1,
    paddingBottom: 18,
  },
  image: {
    width: "100%",
    height: 280,
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: 35,
    height: 35,
    margin: 15,
  },
  listContentContainer: {
    paddingBottom: 15,
    marginTop: 20,
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
