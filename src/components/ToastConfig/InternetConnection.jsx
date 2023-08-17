import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const InternetConnection = ({props}) => {
  const [restored, setRestored] = useState(false);
  useEffect(() => {
    if (!props?.isOnline) {
      setRestored(true);
    }
  }, [props?.isOnline]);
  return (
    <View>
      {!props?.isOnline && <Text>No Connection</Text>}
      {props?.isOnline && restored && <Text>Back Online</Text>}
    </View>
  );
};

export default InternetConnection;

const styles = StyleSheet.create({});
