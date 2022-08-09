import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Platform, Button } from 'react-native';
import logo from '../../assets/271.jpg';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';

import styles from '../Styles';

const HomeScreen = ({ navigation, route }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        if (Platform.OS === 'web') {
            let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
            setSelectedImage({ localUri: pickerResult.uri, remoteUri });
        } else {
            setSelectedImage({ localUri: pickerResult.uri });
        }
    }


    let openShareDialogAsync = async () => {
        // if (Platform.OS === 'ios') {
        //   await Sharing.shareAsync(selectedImage.localUri);
        // } else if (Platform.OS === 'android') {
        //   await Sharing.shareAsync(selectedImage.localUri, { dialogTitle: 'Share Restaurant Reviewer' });
        // } else {
        //   alert('Unsupported Platform');
        // }
        if (!(await Sharing.isAvailableAsync())) {
            alert('The image is available for sharing at ' + selectedImage.remoteUri);
            return;
        }
        Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
    }

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
        )
    }

    useEffect(() => {
        if (route.params?.post) {
            // setSelectedImage(route.params.post);
        }
    }, [route.params?.post]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} ><Text>Go to MainPage</Text></TouchableOpacity>
            <Image source={logo} style={styles.logo} />
            {/* <Image source={splash} style={styles.logo} /> */}
            <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
            {/* <Image source={{ uri: 'https://i.imgur.com/tGbaZCY.jpg' }} style={styles.image} /> */}


            <TouchableOpacity
                title="Go to Details"
                style={styles.button}
                onPress={() => navigation.navigate('Details', { itemId: 123, otherParam: 'anything you want here' })}
            >
                <Text style={styles.buttonText}>Home Screen</Text>
            </TouchableOpacity>

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={openImagePickerAsync}>
                <Text style={styles.buttonText}>Share Photo</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View >
    );
}

export default HomeScreen;