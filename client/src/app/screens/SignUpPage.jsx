import { View, Text, Pressable, TextInput, Button, ActivityIndicator } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { firebase_auth } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const SignUpPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth;

    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;


            await sendEmailVerification(user);
            alert("Verification email sent to " + user.email);

            router.push('/screens/SignUpPage');
        } catch (error) {
            alert("Error occurred: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = firebase_auth.onAuthStateChanged((user) => {
            if (user && user.emailVerified) {
                router.push('screens/HomeScreen'); 
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <View className="flex-1 bg-darkMode p-5">
            <View className="flex flex-row mt-16 items-center">
                
                <Text className='text-2xl font-bold color-white flex-shrink'>12 Hours Hussle</Text>
            </View>
            <View className="flex self-center mt-28">
                <Text className="text-3xl text-white font-semibold">Signup</Text>
            </View>
            <View className='flex flex-col self-center mt-10'>
                <TextInput
                    placeholder='Enter your email'
                    value={email}
                    className="text-white mt-2 p-5 border-gray-500 border-2 rounded-xl"
                    onChangeText={(text) => { setEmail(text); }}
                    placeholderTextColor={"gray"}
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder='Enter your password'
                    value={password}
                    secureTextEntry
                    placeholderTextColor={"gray"}
                    onChangeText={(text) => { setPassword(text); }}
                    className="text-white mt-6 p-5 border-2 border-gray-500 w-96 rounded-xl"
                />
            </View>
            {loading ? <ActivityIndicator size='large' color="#ADD8E6" className='mt-4'  /> : (
                <>
                    <View className="mt-5 p-2 w-48 flex self-center rounded-xl border-2 border-gray-500 mb-5">
                        <Button title='SignUp' onPress={signUp} color={"#FFF"} />
                    </View>
                    <Text className="text-white self-center">Already have an account? 
                        <Link href="/screens/LoginPage" className='text-blue-500'> Login</Link>
                    </Text>
                </>
            )}
        </View>
    );
};

export default SignUpPage;
