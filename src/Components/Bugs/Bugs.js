import React from 'react'

const Bugs = props => {
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
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fagroopt-market.ru%2Fblogs%2Fnews%2Fvreditelimaiskiyzhuk&psig=AOvVaw3P9aMVHRIt9myZIdXi5C48&ust=1611926443709000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC56Yrcvu4CFQAAAAAdAAAAABAI"
                alt="Jooke"/>
            {newBugsList}
            <div>
                <textarea onChange={changeNewBug} value={props.bugsList.newBugName}/>
                <button onClick={addBug}>Add</button>
            </div>
        </div>
    )
}

export default Bugs
