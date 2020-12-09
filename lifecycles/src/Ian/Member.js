import React from "react"
import { Table } from "semantic-ui-react"

const Member = ({id, name}) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
  </Table.Row>
)

export default Member;