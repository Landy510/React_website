import styles from './stepThree.module.scss';
import Confetti from 'react-confetti';

export function StepThree() {
  return <div className={styles['container']}>
    <Confetti
      width={document.documentElement.clientWidth - 30}
      height={document.documentElement.clientHeight - 5}
      recycle={false}
    />
    <p className='text-h1 fw-bold'>Well done!!</p>
  </div>
}