import React, { useState } from 'react'
import FormField from './FormField'
import FormCheckbox from './FormCheckbox'


function onSubmitHandler(event, data) {
  console.log(data)
  event.preventDefault();
}

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

  return (
    <section>
      <h2>Signup Agreement</h2>
      <form
        onSubmit={event => onSubmitHandler(event, {
          url: url,
          detailsRequired: [
            {
              key: 'name',
              required: name,
              reason: nameReason
            },
            {
              key: 'dob',
              required: dob,
              reason: dobReason
            },
            {
              key: 'aadhar',
              required: aadhar,
              reason: aadharReason
            },
            {
              key: 'pan',
              required: pan,
              reason: panReason
            }
          ]
        })}>
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
        <button
          type="submit"
          >
          Agree
        </button>
      </form>
    </section>
  )
}