

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Image } from '../../../node_modules/react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Home = () => (
  <SafeAreaView style={styles.container}>
 
 <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\expense.png')} />

    <View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\expense.png')} />
            Expense
          </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\expense.png')} />
            Expense
          </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    <View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>
            <Image style={styles.buttonImage} source={require('E:\\GITProjects\\MyDiary\\public\\Image\\logout.png')} />
            Logout
          </Text>
      </TouchableOpacity>
    </View>
    <Separator />
    {/* <View>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          color="red" 
          title="Log Out"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor: "#212121",
    // backgroundImage:
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    // borderBottomColor: '#737373',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    color: 'white',
    padding: 20,
    backgroundColor: '#e37712',
    borderRadius:60,
    marginHorizontal: 16,
    marginBottom:40
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonImage: {
    justifyContent: 'center',
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  }
});
export default Home;