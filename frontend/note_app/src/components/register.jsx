import { useState } from 'react';
import axios, { formToJSON } from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleRegister= async () => {
    try {
        
        await axios.post("http://localhost:3000/api/register",  {
            firstName, lastName, email, password},{withCredentials: true,
        });
        navigate("/");
    } catch (err) {
        console.error("Signup Error:", err);
    }
}
return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">

                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">USER SIGNUP</h1>

                {/* <div className="mb-4">
                    <label className="block text-gray-700">Upload Avatar:</label>
                    <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])}
                        className="w-full p-3 border rounded-lg" />
                </div> */}

                <input type="text" placeholder="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="text" placeholder="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                

               

                
                

                <button onClick={handleRegister} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">  Sign Up </button>

            </div>
        </div>
    );
}

export default Register;