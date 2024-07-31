import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"



export default function ContactItem( { contact: { id, name, number }}) {
    return (
      <div className={css.listItem}>
        <img className={css.ava} src={avatar} alt="Avatar" width="48" />
        <FaUser />
        <p className={css.name}>{name}</p>
        <FaPhoneAlt />
        <p className={clsx(isOnline ? css.online : css.offline)}>
          {isOnline ? <FcOnlineSupport /> : <IoCloudOffline /> }</p>
      </div>
    )
  }