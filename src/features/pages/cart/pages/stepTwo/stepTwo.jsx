import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types'
import styles from './stepTwo.module.scss';
import { useState } from 'react';

export function StepTwo(){
  const { 
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const [wordsCount, setWordsCount] = useState(0);

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleChange = async evt => {
    setWordsCount(evt.target.value.trim(' ').length);
  }

  return (
    <form 
      className={styles['form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Register</h2>

      <div className={styles['content']}>
        <div className={styles['cell']}>
          <label>
            <p>First Name</p>
            <input 
              type="text" 
              placeholder='first name'
              {...register('fname', {required: true})}
            />
          </label>

          {
            errors.fname?.type === 'required' && 
            <p className='error-msg fw-bold'>required</p>
          }
        </div>
        <div className={styles['cell']}>
          <label>
            <p>Last Name</p>
            <input 
              type="text" 
              placeholder='last name'
              {...register('lname', {required: true})}
            />
          </label>
          {
            errors.lname?.type === 'required' && 
            <p className='error-msg fw-bold'>required</p>
          }
        </div>
        <div className={[styles['cell'], styles['full']].join(' ')}>
          <label>
            <p>Email Address</p>
            <input 
              type="email"
              {...register('email', {required: true})}
            />
          </label>
          {
            errors.email?.type === 'required' && 
            <p className='error-msg fw-bold'>required</p>
          }
        </div>
        <div className={[styles['cell'], styles['full']].join(' ')}>
          <label>
            <p>Contact Us</p>
            <textarea 
              type="text"
              cols="30" 
              rows="10"
              {...register('msg', {maxLength: 100})}
              onChange={e => handleChange(e)}
            ></textarea>
          </label>

          <WordsCount 
            count={wordsCount} 
            maxLength={100}
          />
          
        </div>
      </div>

      <button 
        type='submit'
        className='text-h4'
      >Submit</button>
    </form>
  )
}

function WordsCount({count, maxLength}) {
  return <p>
    <span className={
      count > maxLength ? 
      ['error-msg', 'fw-bold', 'text-h3'].join(' ') : 
      []
    }>
      {count}
    </span>
    / {maxLength}
  </p>
}
WordsCount.propTypes = {
  count: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired
}