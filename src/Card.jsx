import styles from './Card.module.css';

const Card = ({data}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.flag}>
            <img src={data.flags?.svg} alt='image'/>
        </div>
        <div className={styles.cname}>{data.name.official}</div>
    </div>
  )
}

export default Card