import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Notification from "./Notification";

const LS_KEY = 'contacts'

export function App() {
  const [contacts, setContacts] = useLocalStorage(LS_KEY)
  const [filter, setFilter] = useState('')

  const addContact = contact => {
    if (listContainsContact(contact)) {
      return alert(`${contact.name} is already in contacts.`)
    }
    setContacts(prev => [contact, ...prev])
  }

  const deleteContact = event => {
    const idToDelete = event.currentTarget.id
    const updatedContacts = [...contacts].filter(({ id }) => id !== idToDelete)
    
    setContacts(updatedContacts)
  }

  const listContainsContact = contact => {
    return contacts.some(({ name }) => name.toLowerCase() === contact.name.toLowerCase())
  }

  const handleFilterChange = value => {
    setFilter(value)
  }

  const contactsListEmpty = contacts.length === 0 && filter === '';
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter))

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
      
        {contactsListEmpty
          ? <Notification title='Contacts list is empty' />
          : <>
            <Filter onChange={handleFilterChange} value={filter} />
            <ContactList contacts={filteredContacts} onDeleteClick={deleteContact} />
          </>}
      </div>
  );
}



// export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
//   }

//   componentDidMount() {
//     const storedContacts = localStorage.getItem(LS_KEY)

//     if (!storedContacts) {
//       return
//     }
    
//     const contacts = JSON.parse(storedContacts)
//     this.setState({contacts})
//   }

//   componentDidUpdate(_, prevState) {
//     const prevContacts = prevState.contacts
//     const currentContacts = this.state.contacts
    
//     if (prevContacts.length === currentContacts.length) {
//       return
//     }

//     localStorage.setItem(LS_KEY, JSON.stringify(currentContacts))
//   }



  
//   render() {
//     const { contacts, filter } = this.state
    // const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter))
//     const contactsListEmpty = contacts.length === 0 && filter === '';

  //   return (
  //     <div>
  //       <h1>Phonebook</h1>
  //       <ContactForm onSubmit={this.addContact} />

  //       <h2>Contacts</h2>
  //       {!contactsListEmpty && <Filter onChange={this.onFilterChange} value={filter} />}
  //       {!contactsListEmpty ? <ContactList contacts={filteredContacts} onDeleteClick={this.handleContactDelete} />
  //         : <Notification title='Contacts list is empty' />}
  //     </div>
  // );
//   }
// };
