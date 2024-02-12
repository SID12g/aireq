import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Login() {
  return (
    <View style={styles.root}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/google_login.png')}
        />
      </View>
      <View style={styles.loginWrap}>
        <GoogleLogin />
      </View>
    </View>
  );
}

function GoogleLogin() {
  return (
    <TouchableOpacity style={styles.login}>
      <Image
        style={styles.googleLogo}
        source={require('../../../assets/images/google_login.png')}
      />
      <Text style={styles.googleText}>구글 계정으로 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1},
  imageWrap: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginWrap: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: 120,
    height: 120,

    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '100%',
    height: 54,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 64,
    backgroundColor: '#fff',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 20,
  },
  googleText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#929292',
  },
});
