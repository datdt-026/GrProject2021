import * as React from 'react';
import {Text, View, StyleSheet, ViewStyle, TextStyle} from 'react-native';

export function Response({children}: React.PropsWithChildren<{}>) {
  if (children == null) {
    return null;
  }

  return (
    <View>
      <Text style={styles.text}></Text>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#dcecfb',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: 'black',
  },
});
