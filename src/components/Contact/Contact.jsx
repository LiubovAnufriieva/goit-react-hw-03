import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.itemContainer}>
      <FaUser />
      <p className={css.name}>{name}</p>
      <FaPhoneAlt />
      <p className={css.number}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
