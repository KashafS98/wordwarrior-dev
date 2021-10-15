import React from 'react'
import Button from './Button'
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogList({posts}) {
    return (
        <div className='lg:py-40'>
            <div className='w-3/5 bg-blue relative flex lg:flex-row xs:flex-col mx-auto p-5 lg:justify-between'>
                <h1 className='lg:block xs:hidden text-cyan absolute -rotate-180 -left-14 top-8' style={{writingMode: 'vertical-lr'}}>Blogs</h1>
                <h1 className='lg:hidden xs:block text-cyan my-5' >Blogs</h1>
                {
                    _.uniqBy(posts, function (e) {
                        return e.frontmatter.title;
                      }).map((item,ind)=>{
                        return <div key={item.frontmatter.title} className='lg:w-1/4 h-48 bg-white xs:mb-5 text-blue'>
                            <h4>{item.frontmatter.title}</h4>
                        </div>
                    })
                }
                <div className='w-16 h-16 rounded-full bg-cyan text-center py-2 font-bold lg:block xs:hidden'><h2>{`>`}</h2></div>
                <div className='lg:absolute -right-20 top-32 xs:text-center'>
                <Button text='see all'/>
                </div>
            </div>
        </div>
    )
}
