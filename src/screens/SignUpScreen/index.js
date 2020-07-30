import React, { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { ScreenContainer, ScreenTitle, BlockButton, Input } from '../../components';

function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScreenContainer>
            <KeyboardAvoidingView>
                <ScreenTitle>Sign Up</ScreenTitle>

                <View style={{ height: 10, }} />

                <Input
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />

                <Input
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />

                <View style={{ height: 10, }} />

                <BlockButton
                    func={() => console.log("Success!")}
                >
                    Sign Up
                </BlockButton>
            </KeyboardAvoidingView>
        </ScreenContainer>
    );
}

export default SignUpScreen;