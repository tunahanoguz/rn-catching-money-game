import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScreenContainer, ScreenTitle, BlockButton, Input } from '../../components';

function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScreenContainer>
            <KeyboardAvoidingView>
                <ScreenTitle>Sign Up</ScreenTitle>

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