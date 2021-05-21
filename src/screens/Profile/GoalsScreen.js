import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button } from 'react-native'

export default class GoalsScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.cell}>
                    <Text style={styles.text}>Height</Text>
                    <TextInput style={styles.text} placeholder='5ft 8in' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Weight</Text>
                    <TextInput style={styles.text} placeholder='160 lbs' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Target Weight</Text>
                    <TextInput style={styles.text} placeholder='150 lbs' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Goal plan</Text>
                    <TextInput style={styles.text} placeholder='Intense' />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.text}>Competition/Casual</Text>
                    <TextInput style={styles.text} placeholder='Competition' />
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
