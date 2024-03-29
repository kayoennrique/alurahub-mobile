import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getUserRepositories } from '../../services/requests/repositories';
import { useIsFocused } from '@react-navigation/native';

export default function Repositories({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const thisScreen = useIsFocused();

    useEffect(async () => {
        const result = await getUserRepositories(route.params.login)
        setRepo(result)
    }, [thisScreen])

    return (
        <View style={styles.container}>
            <Text style={styles.repositoriesText}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateRepository', { id: route.params.id })}
            >
                <Text style={styles.textButton}>Adicionar novo repositório</Text>
            </TouchableOpacity>
            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.repository}
                        onPress={() => navigation.navigate('InfoRepository', { item })}
                    >
                        <Text style={styles.repositoryName}>{item.name}</Text>
                        <Text style={styles.repositoryData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
