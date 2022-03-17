import { useState } from "react";

const InputForm = ({ addDataToArrayContacts }) => {
    // state
    const [nameInput, setNameInput] = useState("");
    const [phoneNumberInput, setPhoneNumberInput] = useState("");

    // ui function
    const onPressSubmit = () => {
        if (!nameInput || !phoneNumberInput) {
            alert("Please fill name and phone number");
            return;
        }

        const newData = {
            name: nameInput,
            phoneNumber: phoneNumberInput,
        };
        addDataToArrayContacts(newData);
        setNameInput("");
        setPhoneNumberInput("");
    };

    const onChangeName = (event) => {
        const value = event.target.value;
        setNameInput(value);
    };

    const onChangePhoneNumber = (event) => {
        const value = event.target.value;
        setPhoneNumberInput(value);
    };

    // ui render
    return (
        <div>
            <h3>Input Form</h3>
            <div>name</div>
            <input type="text" value={nameInput} onChange={onChangeName} />
            <br />
            <div>phone number</div>
            <input
                type="text"
                value={phoneNumberInput}
                onChange={onChangePhoneNumber}
            />
            <br />
            <button onClick={onPressSubmit}>Submit</button>
        </div>
    );
};

export default InputForm;
