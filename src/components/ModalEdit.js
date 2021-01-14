import React from 'react'
import {Modal,Button} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({isOpen,setIsOpen,description,value,isExpense,setDescription,setIsExpense,setValue})=>{
    return(
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense}
                    value={value}
                    isExpense={isExpense}
                    description={description}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=> setIsOpen(false)}>Close</Button>
                <Button onClick={()=> setIsOpen(false)} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit