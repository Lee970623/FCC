import marked from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: function(code) {
        return hljs.highlightAuto(code).value
    }
})

export default marked