import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{
        uri: "https://www.gravatar.com/avatar/1?d=monsterid"
      }} />
      <Text style={styles.text}>Bobby Brown</Text>
    </View>
  );
}
function Post() {
  return (
    <View style={styles.postContainer}>
      <Avatar />
      <Image style={styles.postImage} source={{
        uri: "https://www.gravatar.com/avatar/1?d=monsterid&s=200"
      }} />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Post />
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 5,
  },
  postContainer: {
    padding: 10,
    backgroundColor: 'gray'
  },
  postImage: {
    width: 200,
    height: 200,

  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});
