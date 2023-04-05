import * as React from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
import { getAddressSuggestions } from 'react-native-location-autocomplete';

export default function App() {
  const [text, setText] = React.useState<string>('');

  React.useEffect(() => {
    const request = async () => {
      let result = await getAddressSuggestions(text);
      console.log(result);
    };
    request();
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={setText} value={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  textInput: { backgroundColor: 'red', width: 200 },
});
