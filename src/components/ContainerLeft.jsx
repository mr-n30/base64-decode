import { useState, useEffect } from 'react'

export default function ContainerLeft({ input, setInput, setOutput, checked, setChecked }) {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleButtonClick = () => {
        if (checked) {
            return setOutput(btoa(input))
        }

        return setOutput(atob(input))
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove("dark")
        } else {
            document.body.classList.add("dark")
        }
    }, [isDarkMode])


    return (
        <>
            <p className="title-text">Base64</p>
            <p className="title-text">Encode / Decode</p>
            <p className="title-text">Online</p>
            <div className='created-by-container'><span className='created-by-text'>Created by: </span><a className='author-text' href="https://github.com/mr-n30">@mr-n30</a><img src="https://github.com/favicon.ico" /></div>
            <label className="user-input">
                <textarea onChange={handleInput} id="user-input" name="user_input" value={input} className="textarea-left" placeholder={"Enter data to base64 " + ((checked) ? "encode" : "decode") + " here..."}></textarea>
            </label>
            <div className="button-container">
                <div className="encode-button-container">
                    <button className="encode-button" onClick={handleButtonClick}>
                        {(checked) ? "Encode" : "Decode"}
                    </button>
                    <label className="switch">
                        <input className="checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='dark-mode-button-container'>
                    <span className='dark-mode-text'>Dark Mode:</span>
                    <label className="switch">
                        <input className="checkbox" type="checkbox" checked={!isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div >
        </>
    )
}