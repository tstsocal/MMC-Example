import React from 'react'
import { IMember } from '../../types'
import { Form, FormGroup, Label, Input } from 'reactstrap'

export const MemberForm: React.FC<IMember> = ({
  fname,
  lname,
  alias,
  email,
  role,
  status,
  reason
}) => {
  return (
    <Form className="MemberForm">
      <FormGroup>
        <Label for="fname">First Name</Label>
        <Input id="fname" defaultValue={fname} />
      </FormGroup>
      <FormGroup>
        <Label for="lname">Last Name</Label>
        <Input id="lname" defaultValue={lname} />
      </FormGroup>
      <FormGroup>
        <Label for="alias">Alias</Label>
        <Input id="alias" defaultValue={alias} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input id="email" defaultValue={email} />
      </FormGroup>
      <FormGroup>
        <Label for="status">Status</Label>
        <Input type="select" id="status" defaultValue={status}>
          <option>ACTIVE</option>
          <option>PENDING</option>
          <option>BANNED</option>
          <option>REJECTED</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="role">Role</Label>
        <Input id="role" disabled defaultValue={role} />
      </FormGroup>
      <FormGroup>
        <Label for="reason">Rejected/Banned Reason</Label>
        <Input id="reason" type="textarea" disabled defaultValue={reason} />
      </FormGroup>
    </Form>
  )
}
