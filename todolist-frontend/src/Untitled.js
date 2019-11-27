import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class IdeaList extends Component {
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/user/')
			.then(res => console.log('Here comes the data:', (res.data || []).length + ' characters have been fetched'))
			.catch(err => console.log('err', err));
  }

  render() {
    return (
      <View>
        <Text>IdeaList</Text>
      </View>
    )
  }
}