import React, { useState } from 'react'
import { PageHeader, Form, Icon, Input, Button, Checkbox } from 'antd'
import FormField from './FormField'
import FormCheckbox from './FormCheckbox'

export default function PortalSignUpPage(props) {
  const [url, setUrl] = useState("")

  const [name, setName] = useState(false)
  const [nameReason, setNameReason] = useState("")

  const [dob, setDob] = useState(false)
  const [dobReason, setDobReason] = useState("")

  const [aadhar, setAadhar] = useState(false)
  const [aadharReason, setAadharReason] = useState("")

  const [pan, setPan] = useState(false)
  const [panReason, setPanReason] = useState("")

  const pageMargin = 25;

  return (
    <section className="container">
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Signup Agreement
        </h1>
      </PageHeader>
      <form>
        <FormField
          name="url"
          label="Your Portal"
          hint="xyz.com"
          required={true}
          updateVal={setUrl}
        />
        <FormCheckbox
          name="name"
          label="Name"
          updateVal={setName}
        />
        {
          name &&
          <FormField
            name="reason_name"
            label="Reason"
            hint="Why do you need name of customers?"
            required={true}
            updateVal={setNameReason}
          />
        }
        <FormCheckbox
          name="dob"
          label="DateOfBirth"
          updateVal={setDob}
        />
        {
          dob &&
          <FormField
            name="reason_dob"
            label="Reason"
            hint="Why do you need dob of customers?"
            required={true}
            updateVal={setDobReason}
          />
        }
        <FormCheckbox
          name="aadhar"
          label="AADHAR"
          updateVal={setAadhar}
        />
        {
          aadhar &&
          <FormField
            name="reason_aadhar"
            label="Reason"
            hint="Why do you need AADHAR of customers?"
            required={true}
            updateVal={setAadharReason}
          />
        }
        <FormCheckbox
          name="pan"
          label="PAN"
          updateVal={setPan}
        />
        {
          pan &&
          <FormField
            name="reason_aadhar"
            label="Reason"
            hint="Why do you need PAN of customers?"
            required={true}
            updateVal={setPanReason}
          />
        }
      </form>
    </section>
  )
}