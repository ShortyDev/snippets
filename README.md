# Shorty's Snippets

This is the GitHub repository for [my snippets site](https://snippets.shortydev.eu).

## Contribute

Feel free to fork and contribute to the public snippets page!
I support all programming languages (as far as known by [highlight.js](https://highlightjs.org/static/demo/)) except
HTML.

### How to add your own snippet

If you add a new snippet, the code file has to be added
to [`public/snippets/`](https://github.com/ShortyDev/snippets/tree/main/public/snippets) following the naming
convention:

- The name of the file has to look like this `0_YOURNAME_INDEX`
- The username has to be your GitHub username
- Your name has to be in the first part of the file name, separated by an underscore
- The index has to be a number, it's unique to each user, starting with 0
- The ending has to correspond to the language of the snippet
- The file name may not contain any special characters or spaces
- Example of John's first python snippet: `0_John_0.py`

The snippets details have to be added
to [`components/snippets/desc.json`](https://github.com/ShortyDev/snippets/blob/main/components/snippets/desc.json)
following the convention:

- The title has to be short and descriptive
- The language has to be one of the languages supported by [highlight.js](https://highlightjs.org/static/demo/) and
  spelt correctly (case-sensitive, e.g. `Python` not `python`)
- Use your GitHub username as author
- The path is always the file name, nothing else.
- If a tag with the same name already exists, it should be written in the same case as the name of the existing tag.
- Example of John's first python snippet (desc.json):

```json
{
  "snippets": [
    {
      "title": "Hello World",
      "language": "Python",
      "author": "John",
      "path": "0_John_0.py",
      "tags": [
        "Hello World",
        "Example"
      ]
    }
  ]
}
```

By submitting a pull request, you allow ShortyDev and snippets.shortydev.eu to use your code and potentially modify title, language, tags and code to a certain point.