import { useState } from "react";
import ContactItem from "./components/ContactItem";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
    // state
    const [arrayContacts, setArrayContacts] = useState([]);

    // ui function
    const addDataToArrayContacts = (newData) => {
        setArrayContacts([...arrayContacts, newData]);
    };

    // ui render
    return (
        <div className="App">
            <header className="App-header">
                <InputForm addDataToArrayContacts={addDataToArrayContacts} />
                {arrayContacts.map((val) => (
                    <ContactItem data={val} />
                ))}
            </header>
        </div>
    );
}

export default App;
