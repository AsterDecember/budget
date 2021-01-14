import React from 'react'
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";
function NewEntryForm() {
    const {
        description,setDescription,value,setValue,isExpense,setIsExpense,addEntry
    } = useEntryDetails()
    return(
        <Form unstackable>
            <EntryForm
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
                value={value}
                isExpense={isExpense}
                description={description}
            />
            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

export default NewEntryForm