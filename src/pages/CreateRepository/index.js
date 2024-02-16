import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { createUserRepositories } from '../../services/requests/repositories';

export default function CreateRepository({ route, navigation }) {
    const [name, setName] = useState('');
    const [data, setData] = useState('');

    async function create() {
        const result = await createUserRepositories(
            route.params.id,
            name,
            data,
        )

        if (result === 'sucess') {
            Alert.alert('Repositorio criado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao criar repositorio')
        }

    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={styles.opened}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={styles.opened}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={styles.button}
                onPress={create}
            >
                <Text style={styles.textButton}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
