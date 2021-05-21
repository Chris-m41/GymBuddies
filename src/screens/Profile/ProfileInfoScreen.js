import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'

export default class ProfileInfoScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.cell}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.text} placeholder='Donald' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.text} placeholder='Trump' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput style={styles.text} placeholder='Donald@Trump.com' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Phone Number</Text>
                    <TextInput style={styles.text} placeholder='555-555-5555' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Change Password</Text>
                    <TextInput style={styles.text} placeholder='*******' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Height</Text>
                    <TextInput style={styles.text} placeholder='5ft 8in'/>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Weight</Text>
                    <TextInput style={styles.text} placeholder='160 lbs' />
                </View>
                <Button title='Save'/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 25,
        paddingRight: 10,
    }
})
