import {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import Button from './button.js';

function User({login}) {
     const [data, setData] = useState(null);

     useEffect(() => {
         fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
     }, []);

     const profilePicture = {
        rest: { scale: 1},
        hover: { scale: 5, transition: { duration: 0.4 }, borderRadius: 0, top: 160 }
     };

     if (data) {
        return (
            <>
                <motion.img
                    className='avatar'
                    src={data.avatar_url}
                    whileHover='hover'
                    variants={profilePicture}
                />

                <div className='userContent'>
                    <p>Hi <strong>{data.login}</strong></p>
                    
                    <Button
                        pet = "dogs 🐕"
                        buttonText = "Get a dog"
                    />
                    <Button
                        pet = "cats 🐈"
                        buttonText = "Get a cat"
                    />
                </div> 
            </>
        );
     }

     return null;
}

export default User;