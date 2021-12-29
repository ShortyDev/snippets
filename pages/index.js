import Head from 'next/head'
import styles from '../styles/index.module.scss'
import ListedSnippet from "../components/ListedSnippet";
import {useEffect} from "react";
import hljs from 'highlight.js';

export default function Home({container}) {
  let loadedSnippets = [];
  JSON.parse(container).reverse().forEach(snippet => {
    loadedSnippets.push(<ListedSnippet key={snippet.props.title} title={snippet.props.title} author={snippet.props.author} language={snippet.props.language} snippetId={snippet.props.snippetId} tags={snippet.props.tags} code={snippet.props.code}/>)
  });
  useEffect(() => {
    const search = document.getElementById("search");
    const snippets = document.getElementById("snippets").children;
    const inputHandler = (e) => {
      let searchTerm = e.target.value.toLowerCase();
      for (let i = 0; i < snippets.length; i++) {
        if (searchTerm.length === 0) {
          snippets[i].style.display = "block";
        }
        searchTerm.split(" ").forEach((term) => {
          if (term.length === 0) return;
          let block = snippets.item(i).attributes.codeblock
          let title = snippets.item(i).attributes.getNamedItem("title").value.toLowerCase();
          let author = snippets.item(i).attributes.getNamedItem("author").value.toLowerCase();
          let language = snippets.item(i).attributes.getNamedItem("language").value.toLowerCase();
          let tags = snippets.item(i).attributes.getNamedItem("tags").value.toLowerCase();
          let code = block !== undefined ? block.toLowerCase() : "";
          if (title.includes(term) || author.includes(term) || language.includes(term) || tags.includes(term) || code.includes(term))
            snippets[i].style.display = "block";
          else
            snippets[i].style.display = "none";
        })
      }
    }
    search.addEventListener('input', inputHandler)
    for (let i = 0; i < snippets.length; i++) {
      snippets.item(i).firstChild.addEventListener('click', () => {
        let open = snippets.item(i).attributes.open;
        open = !open
        snippets.item(i).attributes.open = open;
        snippets.item(i).children.namedItem("snippet").style.display = open ? "block" : "none";
      })
    }
  })
  return (
    <div>
      <Head>
        <title>shorty//snippets</title>
        <meta name="description" content="Shorty's Code Snippets"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className={styles["top-bar"]}>
          <h1 className={styles["title"]}><span className={styles["title-small"]}>shorty // </span>snippets</h1>
          <div>
            <input id="search" className={styles["search"]} type="search" placeholder={"search here..."}/>
          </div>
        </div>
        <div id="snippets" className={styles["snippet-list"]}>
          {loadedSnippets}
        </div>
      </main>
    </div>
  )
}

const environment = "production";
const path = environment === "production" ? "https://snippets.shortydev.eu/" : "http://localhost:3000/";

import snippets from "../components/snippets/desc.json";

export async function getStaticProps(context) {
  let container = [];
  let id = 0;
  for (const snippet of JSON.parse(JSON.stringify(snippets)).snippets) {
    container.push(<ListedSnippet key={snippet.id} snippetId={id++} title={snippet.title} author={snippet.author}
                                  language={snippet.language} tags={snippet.tags} code={snippet.path}/>)
  }
  return {
    props: {
      container: JSON.stringify(container)
    }
  }
}
