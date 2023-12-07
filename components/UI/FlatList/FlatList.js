import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

const FlatListCustom = ({data, renderComponentData, localKey}) => {
  return (
    <>
      <FlatList data={data} renderItem={({item})=>renderComponentData(item)} keyExtractor={(item=>item[localKey])}/>
    </>
  )
}

export default FlatListCustom;

const styles = StyleSheet.create({})