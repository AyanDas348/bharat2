import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase/firebase';
import { getDatabase, ref, set } from "firebase/database";

const Signin = ({ setPopup }) => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [savePass, setSavePass] = useState(false)
    const [loginType, setLoginType] = useState('email')

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error.credential)
            })
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error.credential)
            });
    }

    const google = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // setAuthToken(credential.accessToken)
                const user = result.user;
                // setUser(result.user.displayName)
                console.log(user, token)
                const db = getDatabase();
                set(ref(db, 'users/' + user.uid), {
                    username: user.displayName,
                    email: user.email,
                    profile_picture: user.photoURL
                });
                localStorage.setItem('bharat-user', user.displayName)
                localStorage.setItem('bharat-loginToken', token)
                localStorage.setItem('bharat-userUID', user.uid)
                setPopup(false)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }


    useEffect(() => {
        if (savePass) {
            localStorage.setItem('password-bharat', password)
        }
    }, [password, savePass])

    // const pass = localStorage.getItem('password-bharat')

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-md md:w-1/4 w-11/12 flex flex-col mx-auto">
            <div className='justify-end flex bg-transparent text-black' onClick={() => {
                setEmail('')
                setPassword('')
                setPopup(false)
            }}>
                X
            </div>
            <div className='bg-transparent flex'>
                <h2 className="text-xl font-bold mb-4 w-1/2 flex justify-center bg-transparent text-black cursor-pointer hover:bg-slate-100 hover:rounded-xl mx-3 py-2" onClick={() => setIsRegistering(true)}>Register</h2>
                <div className='border-r-2 border-slate-500 mb-4'></div>
                <h2 className="text-xl font-bold mb-4 w-1/2 flex justify-center bg-transparent text-black cursor-pointer hover:bg-slate-100 hover:rounded-xl mx-3 py-2" onClick={() => setIsRegistering(false)}>Login</h2>
            </div>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-transparent text-black"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-transparent text-black"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            {/* <div className="mb-4 text-left justify-start flex bg-transparent">
                <label className="bg-transparent">
                    <input type="checkbox" className="mr-2 bg-transparent" onClick={() => setSavePass(!savePass)} value={savePass} />
                    <span className='bg-transparent text-black'>Remember Password</span>
                </label>
            </div> */}
            <div className="flex w-full bg-transparent">
                {isRegistering ? (
                    <>
                        <button
                            className="w-full bg-green-500 text-white py-2 rounded mb-2"
                            onClick={register}
                        >
                            Register
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded mb-2"
                            onClick={login}
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
            <hr className="my-4 w-full" />
            <button className="w-full bg-red-600 text-white py-2 rounded mb-2" onClick={() => google()}>
                Sign in with Google
            </button>
            <button className="w-full bg-blue-700 text-white py-2 rounded mb-2" onClick={() => setLoginType('facebook')}>
                Sign in with Facebook
            </button>
        </div>
    );
};

export default Signin;
