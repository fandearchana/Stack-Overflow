import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/LeftSidebar'
import TagList from './TagsList'
import './Tags.css'
import TagsList from './TagsList'

const Tags = () => {
    const taglist =[{
        id:1,
        tagName: 'javascript',
        tagDesc:'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT...',
    },
    {
        id:2,
        tagName:'python',
        tagDesc:'Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please...',
    },
    {
        id:3,
        tagName: 'java',
        tagDesc:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is...",
    },
    {
        id:4,
        tagName: 'c#',
        tagDesc:`C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's`,
    },
    {
        id:5,
        tagName:'php',
        tagDesc:'PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP…',
    },
    {
        id:6,
        tagName: 'android',
        tagDesc:"Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to",
    },
    {
        id:7,
        tagName: 'html',
        tagDesc:'HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible ex…',
    },{
        id:8,
        tagName:'jquery',
        tagDesc:'jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations, and...',
    },
    {
        id:9,
        tagName: 'reactjs',
        tagDesc:'React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible.',
    },
    {
        id:10,
        tagName: 'css',
        tagDesc:'CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML...',
    },
    {
        id:11,
        tagName: 'ios',
        tagDesc:'iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the...',
    },
    {
        id:12,
        tagName: 'sql',
        tagDesc:'Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the...',
    },
    {
        id:13,
        tagName: 'mysql',
        tagDesc:'MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL...',
    },

]
  return (
   <div className="home-container-1">
        <Leftsidebar/>
        <div className="tag-container-1">
            <h1 className='tags-h1'> Tags </h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
                {
                    taglist.map((tag) => (
                        <TagsList tag={tag} key={TagList.id}/>
                    ))
                }
            </div>
        </div>
   </div>
  )
}

export default Tags