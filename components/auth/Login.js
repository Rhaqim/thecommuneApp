import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
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
        <View style={styles.pageView}>
            <View style={styles.loginContainer}>
                <View style={styles.headerView}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.error}>{error}</Text>
                </View>
                <View style={styles.userInput}>
                    <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsername(text)} />
                    <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => setPassword(text)} />
                </View>
                <View style={styles.view}>
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
        </View>
    );
}

export default Login;




{/* <Text style={styles.title}>Login</Text>
            {error !== "" && <Text style={styles.error}>{error}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
            >
                <Text
                style={{color: 'red', opacity: 0.3 }}>
                    Username
                </Text>
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> */}