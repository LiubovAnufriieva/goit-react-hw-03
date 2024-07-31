import { onSearch }  from "./SearchBox/SearchBox"

import { initialContacts } from "../contacts.json"
import {}
import "./App.css";

const App = () => {
    
    const [contacts, setContacts] = useState(initialContacts);
    const [filter, setFilter] = useState('');   



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={value} onChange={onSearch} />
      <ContactList value={contacts} onChange={addContact}>
    </div>
  );
};

export default App;
