import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ContactList from "./components/ContactList";
import ThemeIcon from "./components/ThemeIcon";
import "./index.css";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Options from "./components/Options";
import AddandRemoveContacts from "./components/AddandRemoveContacts";

const App = () => {
  const [theme, setTheme] = useState(1); //1-> light, 0-> dark
  const [contacts, setContacts] = useState([]);
  const [filteredData, setFilteredData] = useState();

  const [isOpen, setOpen] = useState(false);
  const [isOptionOpen, setOptionOpen] = useState(false);
  const [contactDetail, setContactDetail] = useState()
  const [isUpdate, setUpdate] = useState()

  const handleOption =(contact) => {
    setContactDetail(contact)
    onOptionOpen();
  }

  const onOpen = () => {
    setOpen(true);
  };

  const onOptionOpen = () => {
    setOptionOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onOptionClose = () => {
    setOptionOpen(false);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText === "") {
      setFilteredData(null);
    }
    const searchResults = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchResults);
    setFilteredData(searchResults);
  };

  const handleDelete = async () => {
    const id = contactDetail.id;
    try {
      await deleteDoc(doc(db, "contacts", id))
      setOptionOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setContacts(contactList);
          setFilteredData(contactList);
          return contactList
        })
        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div
        className={`min-h-[100vh] max-h-[130vh] mx-auto ${
          theme ? "bg-[#ffffff]" : "bg-[#1C1C1C]"
        }`}
      >
        <div className=" px-9 pt-[62px] ">
          <NavBar onOpen={onOpen} theme={theme} handleSearch={handleSearch} setUpdate={setUpdate} />
          <ContactList
            theme={theme}
            contacts={filteredData}
            handleOption={handleOption}

          />
        </div>
        <ThemeIcon
          theme={theme}
          setTheme={setTheme}
          setContacts={setContacts}
        />
      </div>
      <AddandRemoveContacts
        theme={theme}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        isUpdate={isUpdate}
        contactDetail={contactDetail}
      />
      <Options
        theme={theme}
        isOpen={isOptionOpen}
        onClose={onOptionClose}
        onOpen={onOpen}
        handleDelete={handleDelete}
        setUpdate={setUpdate}
      />
    </>
  );
};

export default App;
