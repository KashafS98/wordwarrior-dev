import React from 'react'
import Button from './Button'

export default function Intro() {
    return (
        <div className='w-screen lg:py-52 xs:py-20 '>
            <section className='lg:w-3/5 xs:w-4/5 mx-auto flex items-center xs:flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/2 p-6 animate-fadeIn xs:text-center lg:text-left'>
                    <h1>tl;dr</h1>
                    <p>I am a Full Stack/UI Developer (tilting towards Front-end), cat person, coffee, pasta, donuts lover (sweet tooth for almost all desert with icing), in love with classic novels, fantasy, and murder mystery forever. Literature, Psychology, Music and Cinema enthusiast. Anxious all the time, yet an extrovert with a zest for travel, adventure, mountains, lakes, rivers and parties, dresses, and games!</p>
                    <Button type='primary' text='Tell me More!' />
                </div>
                <div className='lg:w-1/2'>
                    <img className='w-5/6 p-6 animate-fadeIn mx-auto' src='https://placekitten.com/360/360'/> 
                </div>
            </section>
        </div>
    )
}
