import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import PostDetail from "../../components/PostDetail"
import StoryScroll from "../../components/StoryScroll"
import Loading from "../../components/Loading"
import Error from "../../components/Error"

// Index == Home
const Index = ({ infos }) => {
  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/destinations?limit=20"
        )
        setPosts(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    const fetchStories = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/actresses?limit=10"
        )
        setStories(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    fetchStories()
  }, [])

  if (loading) return <Loading />
  if (error) return <Error errorMsg={error.message} />

  const renderItem = ({ item: post }) => (
    <PostDetail
      avatar={"https://avatar.iran.liara.run/public"}
      username="fjellheisen"
      image={post.image}
      likes={420}
      p1={`${post.name}, ${post.country}`}
      p2={post.description}
      time="69 minutes"
    />
  )

  const renderStories = ({ item: post }) => (
    <StoryScroll image={post.image} username={post.name} />
  )

  return (
    <ScrollView overScrollMode="never">
      <FlatList
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={renderStories}
        horizontal={true}
        keyExtractor={(post) => post.id.toString()}
      />
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(post) => post.id.toString()}
      />
    </ScrollView>
  )
}

export default Index
