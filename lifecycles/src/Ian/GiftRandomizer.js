import React from "react"
import Member from "./Member"
import { Table } from "semantic-ui-react"

const GiftRandomizer = ({gifts}) => (
    <Table>
      <Table.Body>
        {
          gifts.map(member => (
            <Member key={member.id} {...member}/>
          ))
        }
      </Table.Body>
    </Table>
)

export default GiftRandomizer;