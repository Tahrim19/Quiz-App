import React from 'react'
import FormCategory from './FormCategory'
import '../css/Form.css'
import FormDifficulty from './FormDifficulty'

export default function Settings() {
  return (
    <>
    <form className='settings-form'>
    <div className='settings-form-data'>
    <h3>Trivia!</h3>
    <FormCategory/>
    <FormDifficulty/>
    </div>
    </form>
    </>
  )
}
