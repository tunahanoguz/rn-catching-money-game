import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  ScreenContainer,
  ScreenTitle,
  BlockButton,
  Input,
  AuthScreenBottomText,
} from '../../components';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '317271745451-n47m3sflctm4juiqdqmku16egkuo7rad.apps.googleusercontent.com',
});

function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        try {
          const userData = {
            username,
            email,
            createdAt: new Date(),
            gameType: 0,
            gameLevel: 2,
            // colorMode: 'Light Mode',
          };
          const userCollection = firestore().collection('Users');
          await userCollection.add(userData);
        } catch (error) {
          Alert.alert('Registration Failed!', error.message);
        }
      })
      .then(() => {
        navigation.navigate('Home', { screen: 'HomeScreen' });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'Registration Failed!',
            'The email you entered is already in use.',
          );
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert(
            'Registration Failed!',
            'You have entered an invalid email.',
          );
        }

        Alert.alert('Registration Failed!', error.message);
      });
  }

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Registration Failed!',
          'You have closed the Google login screen. Therefore login failed.',
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'Registration Failed!',
          'Google play services are not available. Therefore login failed.',
        );
      } else {
        Alert.alert(
          'Registration Failed!',
          'Login failed for an unknown reason.',
        );
      }
    }
  }

  return (
    <ScreenContainer>
      <KeyboardAvoidingView>
        <ScreenTitle>Sign Up</ScreenTitle>

        <View style={{ height: 10 }} />

        <Input placeholder="Username" value={username} setValue={setUsername} />

        <Input
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />

        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureText={true}
        />

        <View style={{ height: 10 }} />

        <BlockButton func={signUp}>Sign Up</BlockButton>

        <View style={{ height: 20 }} />

        <BlockButton func={signInWithGoogle}>Sign Up With Google</BlockButton>

        <View style={{ height: 20 }} />

        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <AuthScreenBottomText>
            Do you already have an account? Sign in.
          </AuthScreenBottomText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

export default SignUpScreen;
