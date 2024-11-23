import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';

export default function App() {

  const[ text, setText ]= useState('');
  const[ results, setResults ]= useState('');

  useEffect (()=> {
    fetch('https://www.reddit.com/r/aww.json')
    .then(response => response.json())
    .then(resultsFromServer => {
      setResults(resultsFromServer.data.children)
    })
  }, [])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  function onPress() {
    Alert.alert('Settingan');
  }

  const renderItem= ({item}) => (
    <View style={{ marginTop: 10 }}>
      <Text>{item.data.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Our Project</Text>
      <StatusBar style="auto" />

      <Button
        title="Tekan Saya"
        onPress={() => Alert.alert('Tolong kaki saya sakit')}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Feather name="settings" size={24} color="black" />
        <Text>Press me</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 60 }}>
        <Pressable
          style={styles.button}
          onPressIn={() => console.log('pressing in')}
          onPressOut={() => console.log('pressing out')}
          onLongPress={() => console.log('long press')}
          hitSlop={20}
        >
          <Text>Pressable here</Text>
        </Pressable>
      </View>
      <View>
      <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Text>{text}</Text>
      </View>
      <View>
      <FlatList
          style={{ marginHorizontal: 20 }}
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.data.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDD',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
});
