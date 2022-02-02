import { motion } from "framer-motion";
import { useState } from "react";

const buttonStyle = {
    cursor: "pointer",
    display: "block",
    padding: "0.8214em 1.6429em",
    borderRadius: "8px",
    backgroundColor: "#2b8a3e",
    color: "rgb(255, 255, 255)",
    border: "#2b8a3e",
    fontWeight: "700"
  };

function Button({pet, event, buttonText}) {

    const [count, setCount] = useState(0);

    function readMore(e) {
        e.preventDefault();
        //console.log({event});
        //window.alert(JSON.stringify({event}));
        setCount(count + 1);
    };
    return (
        <>
            <p>You have {count} {pet}</p>
            <motion.button
                style={buttonStyle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={readMore}
            >
                {buttonText.toUpperCase()}
            </motion.button>
        </>
    );
}

export default Button;