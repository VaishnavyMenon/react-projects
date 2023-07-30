import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Field, Formik, Form } from "formik";
import { db } from "../config/firebase";

const AddandRemoveContacts = ({ theme, isOpen, onOpen, onClose, isUpdate, contactDetail }) => {
  const fields = ["Name", "Email", "Phone"];

  const addContact = async (contact) => {
    try {
        const contactRef = collection(db, "contacts")
        await addDoc(contactRef, contact)
    } catch (error) {
        console.log(error)
    } 
    onClose();
  }

  const updateContact = async (contact, id) => {
    try {
        const contactRef = doc(db, "contacts", id)
        await updateDoc(contactRef, contact)
    } catch (error) {
        console.log(error)
    } 
    onClose();
  }

  return (
    <div>
      <Modal theme={theme} isOpen={isOpen} onOpen={onOpen} onClose={onClose} isUpdate={isUpdate}>
        <Formik
          initialValues={isUpdate? {
            name: contactDetail.name,
            email: contactDetail.email,
            phone: contactDetail.phone,
          } : {
            name: "",
            email: "",
            phone: "",
          }}
          onSubmit={(values) => {
            isUpdate? updateContact(values, contactDetail.id) : addContact(values);
          }}
        >
          <Form className={`mx-[28px] flex flex-col gap-[12px]`}>
            {fields?.map((field, i) => (
              <div className={`flex flex-col gap-1`} key={i}>
                <label
                  htmlFor={`${field.toLowerCase()}`}
                  className={`${theme ? "text-[#717171]" : "text-[#ffffff]"}`}
                >
                  {field}
                </label>
                <Field
                  name={`${field.toLowerCase()}`}
                  className={`h-[38px] rounded-[10px]  border-[3px] bg-transparent  px-[10px] ${
                    theme
                      ? "text-[#717171] border-[#717171]"
                      : "text-white border-white"
                  }}`}
                />
              </div>
            ))}

            <button
              className={`h-[40px] bg-[#0085ff] text-white font-medium rounded-[12px] mt-[15px]`}
            > {isUpdate? "Update Contact" : "Add Contact"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandRemoveContacts;
