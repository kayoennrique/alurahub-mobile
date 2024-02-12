import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#8A07DA',
        marginTop: 50,
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
        marginTop: 20,
        borderRadius: 8,
        height: 44,
        width: '90%',
    }
});

export default styles;