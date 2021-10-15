import React from 'react'

export default function Button({type, text, onClick}) {
    return (
        <button className={`${type==='primary'? 'bg-fuscia text-white':'bg-cyan text-blue'} h-12 px-12 uppercase rounded my-3`}>{text}</button>
    )
}
