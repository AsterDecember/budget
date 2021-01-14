import React, {Fragment} from 'react'
import {Checkbox, Form, Segment} from "semantic-ui-react";

const EntryForm = ({
    description,value,isExpense,
    setDescription,setValue,setIsExpense
}) => {
 return (
     <Fragment>
         <Form.Group>
             <Form.Input
                 icon='tags'
                 width={12}
                 label='Description'
                 name='description'
                 value ={description}
                 onChange={e=> setDescription(e.target.value)}
                 placeholder="Nuevo gasto del rash :)"/>
             <Form.Input
                 width={4}
                 name='value'
                 label='Value'
                 placeholder='10,000.00'
                 icon='dollar'
                 value ={value}
                 onChange={e=> setValue(e.target.value)}
                 iconPosition='left'
             />
         </Form.Group>
         <Segment compact>
             <Checkbox
                 toggle
                 label='is expense'
                 onChange={()=>setIsExpense(previousState => !previousState)}
                 checked={isExpense}/>
         </Segment>
     </Fragment>
 )
}

export default EntryForm