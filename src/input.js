import {useState, useEffect} from 'react';

function Input() {
    const [val1, setVal1] = useState("First");
    const [val2, setVal2] = useState("");

    useEffect(() => {
        console.log(`field 1: ${val1}`);
    }, [val1]);

    useEffect(() => {
        console.log(`field 2: ${val2}`);
    }, [val2]);

    return (
        <>
            <label>
                First:
                <input
                    value={val1}
                    onChange={e => setVal1(e.target.value)}
                />
            </label>
            <br />
            <label>
                Second:
                <input
                    value={val2}
                    onChange={e => setVal2(e.target.value)}
                />
            </label>
        </>
    );
}

export default Input;