import { useState } from 'react'

export default function App() {
  // State
  const [input, setInput] = useState('');

  // Decode base64 input
  const handleChange = (e) => {
    try {
      setInput(atob(e.target.value));
    } catch(e) {
      if (e instanceof DOMException) {
	setInput("INVALID BASE64");
      } 
    }
  }

  return(
    <div id="base64-container">
      <div className="text-white ">
	<h1>Online base64 decode</h1>
	<hr/>
	<p>Created by: <a href="https://github.com/mr-n30">mr-n30</a></p>
	<p>Source code on <a href="https://github.com/mr-n30/base64-decode">GitHub</a></p>
	<p>Follow on <a href="https://github.com/mr-n30">GitHub</a></p>
      </div>
      {/* Base64 - "input" container */}
      <div id="base64-input" >
	<div id="textarea-container" className="form-floating">
	<textarea
	onChange={handleChange}
	style={{width: "100%", height: "100%"}}
	id="floating-textarea"
	className="form-control"></textarea>
	<label
	style={{fontSize: "1rem"}}
	htmlFor="floating-textarea">Insert base64 here</label>
	</div>
      </div>

      {/* Base64 - "output" container */}
      <div className="container rounded border border-dark shadow shadow-lg bg-light" id="base64-output">
	<pre>
	<code>{input}</code>
	</pre>
      </div>

    </div>
  )
}
