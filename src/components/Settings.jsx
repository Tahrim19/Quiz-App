import React from 'react'
import FormCategory from './FormCategory'
import '../css/Form.css'
import FormDifficulty from './FormDifficulty'

export default function Settings() {
  return (
    <>
    <form className='settings-form'>
    <div className='settings-form-data'>
    <h3>Quiz Master: React Edition</h3>
    <FormCategory/>
    <FormDifficulty/>
    </div>
    <p className='settings-form-data' 
     style={{
      textAlign: 'center', 
      fontSize: '10px',
      marginTop: '10px', 
    }}
    >
      Made using Reactjs
      </p>
    </form>
    </>
  )
}
