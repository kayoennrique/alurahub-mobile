import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import styles from './styles';

export default function Main({ navigation }) {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({});

    return (
        <ScrollView>
            <View style={styles.container}>
                <>
                    <View style={styles.backGr} />
                    <View style={styles.areaImage}>
                        <Image source={{ uri: 'https://github.com/kayoennrique.png' }} style={styles.image} />
                    </View>
                    <Text style={styles.nameText}>Nome do usuario</Text>
                    <Text style={styles.textEmail}>Email do usuario</Text>
                    <View style={styles.followersArea}>
                        <View style={styles.followers}>
                            <Text style={styles.followersNumber}>30</Text>
                            <Text style={styles.followersText}>Seguidores</Text>
                        </View>
                        <View style={styles.followers}>
                            <Text style={styles.followersNumber}>40</Text>
                            <Text style={styles.followersText}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
                        <Text style={styles.repositories}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </>

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={styles.opened}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
