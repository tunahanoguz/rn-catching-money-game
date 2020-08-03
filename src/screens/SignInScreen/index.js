import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
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

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch((error) => Alert.alert('Registration Failed!', error.message));
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
        <ScreenTitle>Sign In</ScreenTitle>

        <View style={{ height: 10 }} />

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

        <BlockButton func={signIn}>Sign In</BlockButton>

        <View style={{ height: 20 }} />

        <BlockButton func={signInWithGoogle}>Sign In With Google</BlockButton>

        <View style={{ height: 20 }} />

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <AuthScreenBottomText>
            Don't have an account yet? Sign up.
          </AuthScreenBottomText>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

export default SignInScreen;
