import React from "react"
import { Table } from "semantic-ui-react"

const Member = ({name, partner}) => (
  <Table.Row>
    <Table.Cell>{name}{'--------------------'}{partner}</Table.Cell>
  </Table.Row>
)

export default Member;