import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  UncontrolledCollapse
} from 'reactstrap'
import { IMember } from '../../types'

interface Props {
  ident: string
  label: string
  memberList: IMember[]
  toggle(member: IMember): void
}

export const Division: React.FC<Props> = ({
  memberList,
  toggle,
  label,
  ident
}) => {
  const displayTableBody = () => {
    return memberList.map((m: IMember, idx) => {
      return (
        <tr key={idx} onClick={() => toggle(m)}>
          <td>{m.fname}</td>
          <td>{m.lname}</td>
          <td>{m.alias}</td>
          <td>{m.email}</td>
          <td>{m.agreement}</td>
          <td>{m.codeOfConduct}</td>
          <td>{m.role}</td>
          <td>{m.status}</td>
          <td>{m.reason}</td>
        </tr>
      )
    })
  }

  return (
    <Card color="dark" className="Division">
      <CardHeader id={ident}>{label}</CardHeader>
      <UncontrolledCollapse toggler={`#${ident}`}>
        <CardBody>
          <Table dark hover responsive>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Alias</th>
                <th>Email</th>
                <th>Agreement</th>
                <th>Conduct</th>
                <th>Role</th>
                <th>Status</th>
                <th>Rejected/Banned Reason</th>
              </tr>
            </thead>
            <tbody>{displayTableBody()}</tbody>
          </Table>
        </CardBody>
      </UncontrolledCollapse>
    </Card>
  )
}
