import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import SearchAccountCard from "../../components/SearchAccountCard"
import Loading from "../../components/Loading"
import Error from "../../components/Error"

const Search = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/actors?limit=15"
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
    <SearchAccountCard
      image={post.image}
      name={post.name}
      desc={post.known_for[0]}
      followers={post.birth_year}
    />
  )

  return (
    <FlatList
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(post) => post.id.toString()}
    />
  )
}

export default Search
