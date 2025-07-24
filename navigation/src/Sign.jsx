import React, { useState } from 'react';
import './Sign.css'
 import { Link } from 'react-router-dom';

// Signup functional component
function Sign() {
    // State variables to hold form input values
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [cnfpassword, setCnfpassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState(""); // Corrected typo from 'gander' to 'gender'

    // State variable for password mismatch error
    const [passwordError, setPasswordError] = useState(false); // Initial state is false (no error)

    // Function to handle form submission
    const register = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if password and confirm password match
        if (password !== cnfpassword) {
            setPasswordError(true); // Set error to true if they don't match
        } else {
            setPasswordError(false); // Set error to false if they match
            // Log the form data to the console if passwords match
            console.log("Firstname: " + firstname);
            console.log("Lastname: " + lastname); 
            console.log("Email: " + email);
            console.log("Password: " + password);
            console.log("Date of Birth: " + birthday);
            console.log("Gender: " + gender);

            // Here you would typically send this data to a backend API
            // For example:
            // fetch('/api/register', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ firstname, lastname, email, password, birthday, gender })
            // })
            // .then(response => response.json())
            // .then(data => console.log('Success:', data))
            // .catch((error) => console.error('Error:', error));
        }
    };

    return (
        <div className="Rgister">
            <h2 className="Heading">Sign Up Page</h2>
            <form onSubmit={register} className="Container">
                {/* First Name Input */}
                <div>
                    <label htmlFor="firstname" className="Anuj">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="Anuj1"
                        required
                    />
                </div>

                {/* Last Name Input */}
                <div>
                    <label htmlFor="lastname" className="Anuu">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="Anuu1"
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="Goldi">Email</label><br/>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="Goldi1"
                        required
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="Pratibha">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="Pratibha1"
                        required
                    />
                </div>

                {/* Confirm Password Input */}
                <div>
                    <label htmlFor="cnfpassword" className="cnfpassword">Confirm Password</label>
                    <input
                        type="password"
                        id="cnfpassword"
                        value={cnfpassword}
                        onChange={(e) => setCnfpassword(e.target.value)}
                        className={`mt-1 block w-full px-4 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        required
                    />
                    {/* Display password mismatch error message */}
                    {passwordError && (
                        <p className="warning">Passwords do not match!</p>
                    )}
                </div>

                {/* Birthday Input */}
                <div>
                    <label htmlFor="birthday" className="Birthday">Date of Birth</label><br/>
                    <input
                        type="date"
                        id="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="Birthday1"
                        required
                    />
                </div>

                {/* Gender Select */}
                <div>
                    <label htmlFor="gender" className="Genderrr">Gender</label><br/>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="Genderrr"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="btn"
                    >
                        Register
                    </button>
                   <Link to='/'><p className='login'> <center>Already Have an Account</center></p></Link>
                </div>
            </form>
        </div>
    );
}

export default Sign;