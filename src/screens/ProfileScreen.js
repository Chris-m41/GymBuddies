import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class ProfileScreen extends Component {

    navigateToPersonalInfo = () => {
        this.props.navigation.navigate('Personal Info');
    };

    navigateToGoals = () => {
        this.props.navigation.navigate('Goals');
    };

    navigateToPermissions = () => {
        this.props.navigation.navigate('Permissions');
    };

    render() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                <Image 
                style={styles.profileImage}
                />
                <View style={styles.imageText}>
                <Text style={styles.imageTextFont}>Donald Trump</Text>
                <Text style={styles.imageTextFont}>555-555-5555</Text>
                <Text style={styles.imageTextFont}>Donald@Trump.com</Text>
                <Text style={styles.imageTextFont}>Member Level: Silver</Text>
                </View>
                </View>
                <TouchableOpacity 
                    style={styles.cell}
                    onPress={() => this.navigateToPersonalInfo()}
                    >
                    <Text style={styles.cellText}>Edit Personal Info</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.cell}
                    onPress={() => this.navigateToGoals()}
                    >
                    <Text style={styles.cellText}>Edit Goals</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.cell}
                    onPress={() => this.navigateToPermissions()}
                    >
                    <Text style={styles.cellText}>Check Permissions</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        borderTopWidth: .3,
        borderBottomWidth: .3,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        justifyContent: 'center',
    },
    cellText: {
        fontSize: 23,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'blue',
    },
    header: {
        flexDirection: 'row',
        padding: 10,
    },
    imageText: {
        paddingLeft: 20,
    },
    imageTextFont: {
        fontSize: 20,
    },
})

export default function(props) {
    const navigation = useNavigation();
  
    return <ProfileScreen {...props} navigation={navigation} />;
  }