import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

function Avatar({ username, url }) {
  return (
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{
        uri: url
      }} />
      <Text style={styles.text}>{username}</Text>
    </View>
  );
}
function Post({ username, profileImage, image }) {
  return (
    <View style={styles.postContainer}>
      <Avatar username={username} url={profileImage} />
      <Image style={styles.postImage} source={{
        uri: image
      }} />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Post username="Apple" profileImage="https://www.gravatar.com/avatar/1?d=monsterid" image="https://www.gravatar.com/avatar/1?d=monsterid&s=200" />
      <Post username="Bobby" profileImage="https://www.gravatar.com/avatar/2?d=monsterid" image="https://www.gravatar.com/avatar/2?d=monsterid&s=200" />
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
