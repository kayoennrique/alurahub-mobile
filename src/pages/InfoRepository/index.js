import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { deleteUserRepositories, saveUserRepositories } from '../../services/requests/repositories';

export default function InfoRepository({ route, navigation }) {
    const [name, setName] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function toSave() {
        const result = await saveUserRepositories(
            route.params.item.postId,
            name,
            data,
            route.params.item.id
        )

        if (result === 'sucess') {
            Alert.alert('Repositorio atualizado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro')
        }
    }

    async function remove() {
        const resultado = await deleteUserRepositories(route.params.item.id)

        if (resultado === 'sucess') {
            Alert.alert('Repositorio deletado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao deletar o repositorio')
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
            <TouchableOpacity
                style={styles.button}
                onPress={toSave}
            >
                <Text style={styles.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
                onPress={remove}
            >
                <Text style={styles.textButton}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
