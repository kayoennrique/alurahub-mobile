import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';

export default function CreateRepository({ route, navigation }) {
    const [name, setName] = useState('');
    const [data, setData] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={styles.opened}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={styles.opened}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
