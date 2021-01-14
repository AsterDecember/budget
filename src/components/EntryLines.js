import React from 'react'
import EntryLine from "./EntryLine";
import {Container} from "semantic-ui-react";

const EntryLines = ({entries,editEntry}) => {
    return(
        <Container>
            {entries.map((e, key) =>
                <EntryLine key={e.id} {...e}  editEntry={editEntry}/>
            )}
        </Container>
    )
}

export default EntryLines