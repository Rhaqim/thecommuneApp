import { StyleSheet } from "react-native";

const colors = {
    // Colors
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    tertiary: '#ff6b6b',
    quaternary: '#ffcc00',
    background: 'white',
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "flex-start",
        color: colors.primary,
    },
    loginContainer: {
        width: "70%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.secondary,
    },
    headerView: {
        marginTop: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    userInput: {
        width: "90%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.tertiary,
        borderRadius: 10,
    },
    input : {
        color: "white",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.quaternary,
        width: "100%",
        height: "40%",
    },
});

export default styles;