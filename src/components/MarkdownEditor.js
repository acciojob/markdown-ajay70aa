import React, { useEffect, useState } from 'react'
import { marked } from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("")
  const [preview, setPreview] = useState("");
  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);
  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  )
}

export default MarkdownEditor