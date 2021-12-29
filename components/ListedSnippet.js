import styles from '../styles/ListedSnippet.module.scss'
import {useEffect} from "react";
import hljs from 'highlight.js';

const ListedSnippet = ({...props}) => {
  let tags = props.tags.map((tag, index) => {
    return (
      <span key={index} className={styles.tag}>{tag}</span>
    )
  })
  useEffect(() => {
    fetch('snippets/' + props.code).then(res => res.text()).then(data => {
      document.getElementById("code" + props.snippetId).innerHTML = data
      document.getElementById("snip" + props.snippetId).attributes.codeblock = data
      hljs.highlightAll()
    })
  }, [props.snippetId, props.code])
  return (
    <div id={"snip" + props.snippetId} className={styles["listed-snippet"]} {...props}>
      <div>
        {tags}
        <span className={styles["span-left"]}>{props.title}</span>
        <span className={styles["span-right"]}>{`${props.author} // ${props.language}`}</span>
      </div>
      <div name={"snippet"} className={styles.code}>
        <pre>
          <code id={"code" + props.snippetId} className={"java"}>
            {props.code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ListedSnippet