export default function ContainerRight({ output, checked }) {
    return (
        <>
            {/* 6be3fbc0aacb94854ca635f1d426aa83 */}
            <label className="textarea-right">
                <textarea disabled name="text" placeholder={"Base64 " + ((checked) ? "encoded" : "decoded" ) + " data will appear here..."} value={output}></textarea>
            </label>
        </>
    )
}