import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { db } from "../config/firebase";
import { toast } from 'react-toastify';
import * as Yup from "yup"

const contactSchemaValidator = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  phone: Yup.number().required("Phone is required"),
});

const AddandRemoveContacts = ({ theme, isOpen, onOpen, onClose, isUpdate, contactDetail }) => {
  const fields = ["Name", "Email", "Phone"];

  const addContact = async (contact) => {
    try {
        const contactRef = collection(db, "contacts")
        await addDoc(contactRef, contact)
        toast.success("Contact Added Successfully")
    } catch (error) {
        console.log(error)
    } 
    onClose();
  }

  const updateContact = async (contact, id) => {
    try {
        const contactRef = doc(db, "contacts", id)
        await updateDoc(contactRef, contact)
        toast.success("Contact Updated Successfully")
    } catch (error) {
        console.log(error)
    } 
    onClose();
  }

  return (
    <div>
      <Modal theme={theme} isOpen={isOpen} onOpen={onOpen} onClose={onClose} isUpdate={isUpdate}>
        <Formik
          validationSchema={contactSchemaValidator}
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
          <Form className={`mx-[30px] flex flex-col gap-[12px]`}>
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
                <div className={`text-red-500 text-[14px]`}>
                  <ErrorMessage name={`${field.toLowerCase()}`}/>
                </div>
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
