import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    opened: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 40,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    areaImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: -75,
        backgroundColor: '#FFF',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    backGr: {
        backgroundColor: '#C4C4C4',
        width: '100%',
        height: 156,
    },
    nameText: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        padding: 15
    },
    textEmail: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
    },
    followersArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    followers: {
        margin: 20,
        alignItems: 'center',
    },
    followersNumber: {
        color: '#8A07DA',
        fontSize: 15,
    },
    followersText: {
        color: '#95A8B2',
        fontSize: 13,
        marginTop: 5,
    },
    repositories: {
        color: '#8A07DA',
        fontSize: 15,
        fontWeight: '400',
    }
});

export default styles;