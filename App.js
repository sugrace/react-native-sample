import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setIsLoaded(true);
      console.log(position);
      },
      (error)=>{ setError(error); }
      )
  },[])

  return (
    <>
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      {isLoaded ? <Weather/> : (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Getting the Weather</Text>
        {error ? <Text style={styles.errorText}>{error}</Text>: null}        
        </View>
      )}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 23,
  },
  loadingText:{
    fontSize: 35,
    marginBottom: 100,
  }
});
