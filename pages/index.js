import Head from 'next/head'
import styles from '../styles/index.module.scss'
import ListedSnippet from "../components/ListedSnippet";
import {useEffect} from "react";

export default function Home({container}) {
  let loadedSnippets = [];
  JSON.parse(container).reverse().forEach(snippet => {
    loadedSnippets.push(<ListedSnippet key={snippet.props.title} title={snippet.props.title}
                                       author={snippet.props.author} language={snippet.props.language}
                                       snippetId={snippet.props.snippetId} tags={snippet.props.tags}
                                       code={snippet.props.code}/>)
  });
  useEffect(() => {
    const search = document.getElementById("search");
    const snippets = document.getElementById("snippets").children;
    const inputHandler = (e) => {
      let searchTerm = e.target.value.toLowerCase();
      for (let i = 0; i < snippets.length; i++) {
        snippets[i].style.display = "none";
        if (searchTerm.length === 0) {
          snippets[i].style.display = "block";
        }
        searchTerm.split(" ").forEach((term) => {
          if (term.length === 0) {
            return;
          }
          let block = snippets.item(i).attributes.codeblock
          let title = snippets.item(i).attributes.getNamedItem("title").value.toLowerCase();
          let author = snippets.item(i).attributes.getNamedItem("author").value.toLowerCase();
          let language = snippets.item(i).attributes.getNamedItem("language").value.toLowerCase();
          let tags = snippets.item(i).attributes.getNamedItem("tags").value.toLowerCase();
          let code = block !== undefined ? block.toLowerCase() : "";
          title.split(" ").forEach((word) => {
            if (word.length === 0) {
              snippets[i].style.display = "block";
              return;
            }
            if (word === term) {
              snippets[i].style.display = "block";
            }
          });
          if (author.includes(term) || language.includes(term) || tags.includes(term))
            snippets[i].style.display = "block";
          if (term.includes(".") && code.includes(term))
            snippets[i].style.display = "block"
          code.split(" ").forEach((word) => {
            if (word.length === 0) return
            if (word.includes("public") || word.includes("void") || word.includes("private") || word.includes("protected") || word.includes("static")) return
            word.split(".").forEach((word) => {
              if (word.length === 0) return
              word.split("(").forEach((word) => {
                if (word.length === 0) return
                if (word === term)
                  snippets[i].style.display = "block"
              })
            })
          })
        })
      }
    }
    search.addEventListener('input', inputHandler)
    document.getElementById("title").addEventListener('click', (e) => {
      search.value = ""
      inputHandler({target: {value: ""}})
    })
    for (let i = 0; i < snippets.length; i++) {
      snippets.item(i).firstChild.addEventListener('click', () => {
        let open = snippets.item(i).attributes.open;
        open = !open
        snippets.item(i).attributes.open = open;
        snippets.item(i).children.namedItem("snippet").style.display = open ? "block" : "none";
      })
    }
  /*  let toggler = document.getElementById("toggler");
    toggler.addEventListener('click', (e) => {
      if (localStorage.getItem("dark") === "true") {
        localStorage.setItem("dark", "false")
      } else {
        localStorage.setItem("dark", "true")
      }
      toggler.innerHTML = localStorage.getItem("dark") !== "true" ? (
          `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`) :
        (`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`)
    })
    toggler.innerHTML = localStorage.getItem("dark") !== "true" ? (
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`) :
      (`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`)*/
  })
  return (
    <div>
      <Head>
        <title>shorty//snippets</title>
        <meta name="description" content="Shorty's Code Snippets"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className={styles["contribute"]}>
            <a href="https://github.com/ShortyDev/snippets/fork">
              <span>Contribute on GitHub</span>
            </a>
            <a href="https://github.com/ShortyDev/snippets">
              <img src="GitHub-Mark-32px.png" width={32} height={32} alt="GitHub Logo" />
            </a>
        </div>
        <div className={styles["top-bar"]}>
          <h1 id={"title"} className={styles["title"]}><span className={styles["title-small"]}><a href="https://shortydev.eu">shorty //</a> </span>snippets
          </h1>
          <div>
            <input id="search" className={styles["search"]} type="search" placeholder={"search here..."}/>
          </div>
          <div className={styles["darkModeToggle"]} id={"toggler"}>
          </div>
        </div>
        <div id="snippets" className={styles["snippet-list"]}>
          {loadedSnippets}
        </div>
      </main>
    </div>
  )
}

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
