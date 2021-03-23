import React, { useReducer } from 'react'
import { IMember } from '../../types'
import { Form, FormGroup, Label, Input } from 'reactstrap'

interface IAction {
  field: string
  value: string
}

function reducer(state: IMember, action: IAction) {
  return { ...state, [action.field]: action.value }
}

export const MemberForm: React.FC<IMember> = (props) => {
  const [state, dispatch] = useReducer(reducer, props)

  return (
    <Form className="MemberForm">
      <FormGroup>
        <Label for="fname">First Name</Label>
        <Input
          id="fname"
          value={state.fname}
          onChange={(e) =>
            dispatch({ field: 'fname', value: e.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="lname">Last Name</Label>
        <Input
          id="lname"
          value={state.lname}
          onChange={(e) =>
            dispatch({ field: 'lname', value: e.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="alias">Alias</Label>
        <Input
          id="alias"
          value={state.alias}
          onChange={(e) =>
            dispatch({ field: 'alias', value: e.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ field: 'email', value: e.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="status">Status</Label>
        <Input
          type="select"
          id="status"
          value={state.status}
          onChange={(e) =>
            dispatch({ field: 'status', value: e.currentTarget.value })
          }
        >
          <option>ACTIVE</option>
          <option>PENDING</option>
          <option>BANNED</option>
          <option>REJECTED</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="role">Role</Label>
        <Input
          id="role"
          disabled
          value={state.role}
          onChange={(e) =>
            dispatch({ field: 'role', value: e.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="reason">Rejected/Banned Reason</Label>
        <Input
          id="reason"
          type="textarea"
          disabled
          value={state.reason}
          onChange={(e) =>
            dispatch({ field: 'reason', value: e.currentTarget.value })
          }
        />
      </FormGroup>
    </Form>
  )
}
