import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import COLORS from "../../constants/colors"
import axios from "axios"
import Loading from "../../components/Loading"
import Error from "../../components/Error"

const Explore = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/destinations"
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

  if (loading) return <Loading />
  if (error) return <Error errorMsg={error.message} />

  const renderItem = ({ item: post }) => (
    <View style={styles.postContainer}>
      <Image
        source={{ uri: post.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )

  return (
    <FlatList
    overScrollMode="never"
      showsVerticalScrollIndicator={false}
      data={posts}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={(post) => post.id.toString()}
    />
  )
}

export default Explore

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: COLORS.white,
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    margin: 1,
    objectFit: "cover",
  },
})
