import styles from './progressBar.module.scss';
import PropTypes from 'prop-types';

export function ProgressBar({active}) {
  return <div className={styles['container']}>
  <div className={[styles['box'], active ? 'active' : ''].join(' ')}></div>
  <div className={[styles['bar'], active ? 'active' : ''].join(' ')}></div>
</div>
}

ProgressBar.propTypes = {
  active: PropTypes.boolean.isRequired,
}