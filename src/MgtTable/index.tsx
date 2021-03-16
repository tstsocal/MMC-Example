import dayjs from 'dayjs'
import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledCollapse,
  ModalFooter,
  Button
} from 'reactstrap'
import { IMember } from '../../types'
import { MemberForm } from './MemberForm'
import { Division } from './Division'

import './style.scss'

const dt = dayjs().format('MMM-DD-YYYY hh:mm a')

const dates = {
  agreement: dt,
  codeOfConduct: dt
}

const list: IMember[] = [
  {
    fname: 'Satan',
    lname: 'Rebel',
    alias: 'Bad Boi',
    email: 'satan@gmail.com',
    status: 'ACTIVE',
    role: 'ADMIN',
    reason: 'N/A',
    ...dates
  },
  {
    fname: 'Belial',
    lname: 'Gatekeeper',
    alias: 'Belial',
    email: 'belial@gmail.com',
    status: 'ACTIVE',
    role: 'LEADER',
    reason: 'N/A',
    ...dates
  },
  {
    fname: 'Lucy',
    lname: 'Ferr',
    alias: 'Lucifer',
    email: 'lferr@gmail.com',
    status: 'ACTIVE',
    role: 'MEMBER',
    reason: 'N/A',
    ...dates
  }
]

interface IModal {
  show: boolean
  member: IMember | null
}

export const MgtTable = () => {
  const [modal, setModal] = useState<IModal>({ show: false, member: null })

  const toggleOff = () => setModal({ show: false, member: null })
  const toggleOn = (member: IMember) => setModal({ show: true, member })

  return (
    <div className="MgtTable">
      <Division
        ident="LA"
        label="Los Angeles Division"
        memberList={list}
        toggle={toggleOn}
      />
      <Division
        ident="VC"
        label="Ventura County Division"
        memberList={list}
        toggle={toggleOn}
      />
      <Division
        ident="OC"
        label="Orange County Division"
        memberList={list}
        toggle={toggleOn}
      />
      <Division
        ident="SD"
        label="San Diego Division"
        memberList={list}
        toggle={toggleOn}
      />
      <Division
        ident="IE"
        label="Inland Empire Division"
        memberList={list}
        toggle={toggleOn}
      />

      <Modal
        className="member-modal"
        isOpen={modal.show}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader toggle={toggleOff}>Member Edit</ModalHeader>
        <ModalBody>
          <MemberForm {...modal?.member} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleOff}>
            Cancel
          </Button>{' '}
          <Button color="primary" onClick={toggleOff}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
