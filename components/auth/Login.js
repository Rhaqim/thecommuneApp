import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./AuthStyles";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (username === "") {
            setError("Username is required");
        } else if (password === "") {
            setError("Password is required");
        } else {
            setError("");
            navigation.navigate("Main");
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.pageView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginContainer}>
                    <View style={styles.headerView}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.error}>{error}</Text>
                    </View>
                    <View style={styles.userInput}>
                        <TextInput style={styles.input} placeholder="Username" placeholderTextColor={"#000"} onChangeText={(text) => setUsername(text)} />
                        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#000"} onChangeText={(text) => setPassword(text)} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text style={styles.buttonText}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default Login;