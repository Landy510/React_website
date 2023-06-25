import { useState } from 'react';
import styles from './stepTwo.module.scss';

export function StepTwo(){
  const [inputs, setInputs] = useState({});

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputs)
  }

  return (
    <form 
      className={styles['form']}
      onSubmit={handleSubmit}
    >
      <h2>Register</h2>

      <div className={styles['content']}>
        <div className={styles['cell']}>
          <label>
            <p>First Name</p>
            <input 
              type="text" 
              name='fname'
              value={inputs.fname || ''}
              placeholder='first name'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles['cell']}>
          <label>
            <p>Last Name</p>
            <input 
              type="text" 
              name='lname'
              value={inputs.lname || ''}
              placeholder='last name'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={[styles['cell'], styles['full']].join(' ')}>
          <label>
            <p>Email Address</p>
            <input 
              type="email"
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={[styles['cell'], styles['full']].join(' ')}>
          <label>
            <p>Contact Us</p>
            <textarea 
              type="text"
              name="msg" 
              cols="30" 
              rows="10"
              value={inputs.msg || ''}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
      </div>

      <button 
        type='submit'
        className='text-h4'
      >Submit</button>
    </form>
  )
}