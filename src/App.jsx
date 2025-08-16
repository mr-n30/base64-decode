import { useState } from 'react'
import ContainerLeft from './components/ContainerLeft.jsx'
import ContainerRight from './components/ContainerRight.jsx'
import './index.css'

export default function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [checked, setChecked] = useState(true)

  return (
    <div className='custom-container'>
      <ContainerLeft input={input} setInput={setInput} setOutput={setOutput} checked={checked} setChecked={setChecked} />
      <ContainerRight output={output} checked={checked} />
    </div>
  )
}
