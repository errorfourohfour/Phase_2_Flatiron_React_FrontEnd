import {useState} from 'react'

export default function TextBox({handleSubmit}) {
    const [text, setTextValue]= useState ()
    const addToList = (e) => {
e.preventDefault()
handleSubmit(text)
setTextValue("");
    }
    return (
        <div>
            <form onSubmit= {addToList}>
                <input type="text" value= {text} placeholder="add items here" onChange= {e=> setTextValue(e.target.value)}></input>
                <button type="submit" >add item</button>
            </form>
        </div>
    )
}
