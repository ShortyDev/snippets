import styles from '../styles/ListedSnippet.module.scss'

const ListedSnippet = ({children, ...props}) => {
  return (
    <div className={styles.ListedSnippet} {...props}>
      Test {props}
    </div>
  )
}

export default ListedSnippet