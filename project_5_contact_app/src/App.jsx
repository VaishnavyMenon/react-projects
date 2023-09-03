import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ContactList from "./components/ContactList";
import ThemeIcon from "./components/ThemeIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Options from "./components/Options";
import AddandRemoveContacts from "./components/AddandRemoveContacts";

const App = () => {
  const [theme, setTheme] = useState(1); //1-> light, 0-> dark
  const [contacts, setContacts] = useState();
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
    setFilteredData(searchResults);
  };

  const handleDelete = async () => {
    const id = contactDetail.id;
    try {
      await deleteDoc(doc(db, "contacts", id))
      setOptionOpen(false);
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef, (snapshot) => {
          const contactList =  snapshot.docs.map((doc) => {
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
        className={`min-h-[104.7vh] h-[140vh] overflow-hidden mx-auto ${
          theme ? "bg-[#ffffff]" : "bg-[#1C1C1C]"
        }`}
      >
        <div className=" px-9 pt-[62px] overflow-hidden">
          <NavBar onOpen={onOpen} theme={theme} handleSearch={handleSearch} setUpdate={setUpdate} />
          <ContactList
            theme={theme}
            contacts={filteredData}
            handleOption={handleOption}
            setUpdate={setUpdate}
            onOpen={onOpen}
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
      <ToastContainer position="bottom-center" theme={`${theme? "light" : "dark"}`} className={`rounded-[40px] p-[15px]`}/>
    </>
  );
};

export default App;
