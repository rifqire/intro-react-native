import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import MyProfileCard from "../../components/MyProfileCard"
import useAuth from "../../context/auth/UseAuth"
import { router } from "expo-router"
import COLORS from "../../constants/colors"
import SquareTextButton from "../../components/SquareTextButton"
import axios from "axios"

// Profile == Profile
const Profile = () => {
  const { logout } = useAuth()

  const handleLogOut = () => {
    logout()
    router.replace("login")
  }

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/destinations?limit=10"
        )
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
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )

  return (
    <ScrollView>
      <View style={styles.container}>
        <MyProfileCard
          name="Rifqi R"
          desc="Nolite te bastardes carborundorum"
          url="https://youtu.be/dQw4w9WgXcQ"
          postsAmount={24}
          followersAmount={483}
          followingAmount={322}
        />
        <View style={{ marginHorizontal: 20, marginTop: 5, marginBottom: 20 }}>
          <SquareTextButton title="Edit Profile" onPress={() => {}} />
          <SquareTextButton title="Log Out" onPress={handleLogOut} />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(post) => post.id.toString()}
      />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    margin: 1,
    objectFit: "cover",
  },
})
