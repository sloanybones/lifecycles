import React from "react"
import { useState } from "react"
import { Form } from "semantic-ui-react"

const MemberAddForm = (props) => {
  const [name, setName] = useState("")
  console.log(props)

  const handleSubmit = () => {
    props.addHandler({name})
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input name="name"
                    label="name"
                    value = {name}
                    onChange = {(e) => {
                      setName(e.target.value)
                    }}
                    placeholder="New Name"/>
        <Form.Button>Add Member</Form.Button>
      </Form.Group>
    </Form>
  )
}

export default MemberAddForm