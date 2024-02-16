import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import styles from './styles';
import { searchUser } from '../../services/requests/users';

export default function Main({ navigation }) {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({});

    async function search() {
        const result = await searchUser(userName)

        setUserName('')
        if (result) {
            setUser(result)
        }
        else {
            Alert.alert('Usuario não encontrado')
            setUser({})
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    user?.login &&
                    <>
                        <View style={styles.backGr} />
                        <View style={styles.areaImage}>
                            <Image source={{ uri: user.avatar_url }} style={styles.image} />
                        </View>
                        <Text style={styles.nameText}>{user.name}</Text>
                        <Text style={styles.textEmail}>{user.email}</Text>
                        <View style={styles.followersArea}>
                            <View style={styles.followers}>
                                <Text style={styles.followersNumber}>{user.followers}</Text>
                                <Text style={styles.followersText}>Seguidores</Text>
                            </View>
                            <View style={styles.followers}>
                                <Text style={styles.followersNumber}>{user.following}</Text>
                                <Text style={styles.followersText}>Seguindo</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositories', { login: user.login })}>
                            <Text style={styles.repositories}>
                                Ver os repositórios
                            </Text>
                        </TouchableOpacity>
                    </>
                }
                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={styles.opened}
                    value={userName}
                    onChangeText={setUserName}
                />

                <TouchableOpacity style={styles.button}
                    onPress={search}
                >
                    <Text style={styles.textButton}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
