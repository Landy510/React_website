import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './stepTwo.module.scss';
import { useState } from 'react';

export function StepTwo(){
  const { 
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      msgText: ''
    }
  });

  const navigate =  useNavigate();

  const [wordsCount, setWordsCount] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    navigate('/cart/completed');
  }

  const handleChange = evt => {
    setWordsCount(evt.target.value.trim(' ').length);
  }

  const isValid = () => {
    return Object.keys(errors).length === 0
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
              {...register('email', 
                {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                })}
            />
          </label>
          {
            errors.email?.type === 'required' && 
            <p className='error-msg fw-bold'>required</p>
          }
          {
            errors.email?.type === 'pattern' && 
            <p className='error-msg fw-bold'>pattern</p>
          }
        </div>
        <div className={[styles['cell'], styles['full']].join(' ')}>
          <label>
            <p>Contact Us</p>
            <textarea 
              type="text"
              cols="30" 
              rows="10"
              {...register(
                  'msgText', 
                  {
                    maxLength: 100,
                    onChange: (e) => handleChange(e)
                  }
                )
              }
            ></textarea>
          </label>
          <p>
            <span
              className={
                errors.msgText?.type === 'maxLength' ?
                ['error-msg', 'fw-bold', 'text-h3'].join(' ') : []
              }
            >{wordsCount}</span> /100
          </p>
        </div>
      </div>

      <button 
        type='submit'
        className='text-h4 bg-primary'
        disabled={!isValid()}
      >Submit</button>
    </form>
  )
}
