import { StyleSheet } from "react-native";

const colors = {
    // Colors
    primary: 'white',
    secondary: '#A1A1A1',
    tertiary: '#ff6b6b',
    quaternary: '#ffcc00',
    background: 'black',
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    loginContainer: {
        marginTop: 70,
        width: "95%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.background,
    },
    headerView: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.primary,
        width: "100%",
    },
    userInput: {
        width: "90%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    input: {
        color: "black",
        fontSize: 20,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        width: "100%",
        height: "40%",
        paddingLeft: 10,
    },
    buttonContainer: {
        width: "90%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: "20px",
        width: "60%",
        height: "26%",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.background,
        fontSize: 20,
        fontWeight: 'bold',
    },
    error: {
        color: colors.tertiary,
        width: "100%",
    },
});

export default styles;