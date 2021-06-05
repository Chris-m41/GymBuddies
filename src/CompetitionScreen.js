import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

export default class CompetitionScreen extends Component {
    listOfFriends = ['Sam', 'Peter', 'Matt', 'Mark'];
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.list}>
                    <Text style={styles.textName}>Sam A.</Text>
                    <View style={styles.end}>
                    <Text style={styles.text}>3000/2800</Text>
                    <Text style={styles.text}> 1/5</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        flexDirection: 'row',
    },
    textName: {
        textAlignVertical: 'center',
        fontSize: 20,
        alignContent: 'flex-end',
    },
    text: {
        alignContent: 'flex-end',
        textAlignVertical: 'center',
        fontSize: 20,
        // alignItems: 'flex-end'
    },
    end: {
        // alignItems: 'flex-end',
        flexDirection: 'row',
    }
})
