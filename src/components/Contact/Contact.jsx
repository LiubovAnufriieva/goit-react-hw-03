import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Contact=({ data: { id, name, number }, onDelete })=> {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <p><FaUser />   {name}</p>

        <p><FaPhone />   {number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

