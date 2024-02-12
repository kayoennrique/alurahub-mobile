import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';

export default function InfoRepository({ route, navigation }) {
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
            <TouchableOpacity 
                style={styles.button} 
            >
                <Text style={styles.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={styles.textButton}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
