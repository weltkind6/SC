import React from 'react'

const Bugs = props => {
debugger
    const newBugsList = props.bugsList.bugsList.map(b => <div>{b.name}</div>)

    const addBug = () => {
        props.addNewBug()
    }
    const changeNewBug = e => {
        const text = e.target.value
        props.changeNewBugArea(text)
    }
    return (
        <div>
            <h1>Most dangerous bags in Russia!</h1>
            {newBugsList}
            <div>
                <textarea onChange={changeNewBug} value={props.bugsList.newBugName}/>
                <button onClick={addBug}>Add</button>
            </div>
        </div>
    )
}

export default Bugs