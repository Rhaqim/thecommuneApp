import { StyleSheet } from 'react-native'


const colors = {
    // Colors
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    tertiary: '#ff6b6b',
    quaternary: '#ffcc00',
    background: '#f5f5f5',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 1,
    },
    instructions: {
        color: '#888',
        fontSize: 20,
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    image: {
        width: 305,
        height: 159,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#242526',
        borderRadius: 70,
        padding: 7,
        paddingBottom: 10,
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10,
        marginTop: 10
    },
    buttonText: {
        fontSize: 30,
        color: '#242526'
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: "100%",
        height: 70,
        alignItems: 'center',
        paddingTop: 20,
    },
    registerButton: {
        backgroundColor: colors.secondary,
        width: "100%",
        height: 70,
        alignItems: 'center',
        paddingTop: 20,
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    authetication: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f2',
        marginBottom: 20,

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    error : {
        color: 'red',
        fontSize: 20,
        marginBottom: 20,
    },
    input : {
        borderWidth: 1,
        borderColor: '#242526',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: "100%",
        height: 50,
        color: '#242526',
        fontSize: 20,
    }
});

export default styles