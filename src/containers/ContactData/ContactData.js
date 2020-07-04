import React from "react";
import Button from "../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postcode: "",
    },
  };
  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Street" />
          <input type="text" name="postcode" placeholder="Your Post Code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
