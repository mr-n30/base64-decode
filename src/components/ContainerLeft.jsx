
export default function ContainerLeft({ input, setInput, setOutput, checked, setChecked }) {
    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const handleButtonClick = () => {
        if (checked) {
            return setOutput(btoa(input))
        }

        return setOutput(atob(input))
    }

    return (
        <>
            <p className="title-text">Base64</p>
            <p className="title-text">Encode / Decode</p>
            <p className="title-text">Online</p>
            <label className="user-input">
                <textarea onChange={handleInput} id="user-input" name="user_input" value={input} className="user-input" placeholder="Enter data to base64 encode here..."></textarea>
            </label>
            <div className="button-container">
                <button className="encode-button" onClick={handleButtonClick}>
                    {(checked) ? "Encode" : "Decode"}
                </button>
                <label className="switch">
                    <input className="checkbox" type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
                    <span className="slider round"></span>
                </label>
            </div >
        </>
    )
}