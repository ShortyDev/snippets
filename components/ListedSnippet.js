import styles from '../styles/ListedSnippet.module.scss'

const ListedSnippet = ({...props}) => {
  let tags = props.tags.map((tag, index) => {
    return (
      <span key={index} className={styles.tag}>{tag}</span>
    )
  })
  return (
    <div className={styles["listed-snippet"]} {...props}>
      {tags}
      <span className={styles["span-left"]}>{props.title}</span>
      <span className={styles["span-right"]}>{`${props.author} // ${props.language}`}</span>
      <div name={"snippet"} className={styles.code}>
        <pre>
          <code className={"java"}>
            {props.code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ListedSnippet