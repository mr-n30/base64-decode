export default function ContainerRight({ output }) {
    return (
        <>
            <label className="textarea-right">
                <textarea name="text" placeholder="Base64 decoded data here..." value={output}></textarea>
            </label>
        </>
    )
}