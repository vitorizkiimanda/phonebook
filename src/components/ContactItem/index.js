const ContactItem = ({ data }) => {
    return (
        <div>
            <br />
            <div>{`name : ${data.name}`}</div>
            <div>{`phone number : ${data.phoneNumber}`}</div>
        </div>
    );
};

export default ContactItem;
