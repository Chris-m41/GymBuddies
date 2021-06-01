import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'

export default class PermissionsScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => this.askForPermissions()}
                    > 
                    <Text style={styles.cellText}>Apple Health Kit</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cell}
                    > 
                    <Text style={styles.cellText}>Google Health</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cell}
                    > 
                    <Text style={styles.cellText}>Fitbit</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cell}
                    > 
                    <Text style={styles.cellText}>Garmin</Text> 
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
})
