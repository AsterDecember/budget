import './App.css';
import {Container} from "semantic-ui-react";
import {useEffect, useState} from 'react';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useSelector} from 'react-redux'
function App() {
    //const [entries,setEntries] = useState()
    const [value,setValue] = useState('')
    const [description,setDescription] = useState('')
    const [isExpense,setIsExpense] = useState(true)
    const [isOpen,setIsOpen] = useState(false)
    const [entryId,setEntryId] = useState()
    const [income,setIncome] = useState(0)
    const [outcome,setOutcome] = useState(0)
    const [balance,setBalance] = useState(0)
    const entries = useSelector(state=> state.entries)
    useEffect( ()=> {
        if(!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries];
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            //setEntries(newEntries)
            resetEntry()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOpen])
    useEffect(()=> {
        let totalIncome = 0
        let totalOutcome = 0
        entries.map( e=> e.isExpense ? totalOutcome = totalOutcome+parseInt(e.value) : totalIncome = totalIncome+parseInt(e.value))
        setOutcome(totalOutcome)
        setIncome(totalIncome)
        setBalance(totalIncome-totalOutcome)
    },[entries])

    ///



    //


    const resetEntry = () => {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }
    
    const editEntry = (id) => {
        console.log(`edit entry ${id}`)
        if(id){
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]
            setEntryId(id)
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true)
        }
    }
    const addEntry = () => {
        /*setEntries(previousState => ([...previousState,{
            id:entries.length+1,
            description,
            value,
            isExpense
        }]))*/
        resetEntry()
    }

  return (
      <Container>

          <MainHeader title="Spawnmarky"/>
          <DisplayBalance title='Your Balance' value={balance} size='small'/>

          <DisplayBalances income={income} outcome={outcome}/>

          <MainHeader type='h3'  title='History'/>

          <EntryLines entries={entries}  editEntry={editEntry}/>

          <MainHeader type='h3' title='Add new Transaction'/>
          <NewEntryForm />
          <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
                     setValue={setValue}
                     setDescription={setDescription}
                     setIsExpense={setIsExpense}
                     value={value}
                     isExpense={isExpense}
                     description={description}
          />
      </Container>
  );
}

export default App;

