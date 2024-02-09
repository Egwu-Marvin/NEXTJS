import React from 'react'

import { FaRegSquareFull } from "react-icons/fa6";
import { LiaStar } from "react-icons/lia";
import { MdLabelImportantOutline } from "react-icons/md";


const data = [
    {
        "subject": "How to format these dates and sort? - JavaScript",
        "title": "How to format these dates and sort?",
        "time": "28/03/2021",
        "sender": "Unknown",
        "content": [
            "A user seeks guidance on formatting and sorting dates in JavaScript.",
            "The array structure includes title and date fields.",
            "The provided search result does not contain specific details on solving the query."
        ]
    },
    {
        "subject": "How To Get Array Of Multiple Emails From Gmail?",
        "title": "How To Get Array Of Multiple Emails From Gmail?",
        "time": "12/01/2024",
        "sender": "Unknown",
        "content": [
            "The user wishes to create an array of emails from existing emails in Gmail.",
            "The goal is to reply to all of them, with specific mention of test3@gmail.com.",
            "The search results lack detailed information about the specific question."
        ]
    },
    {
        "subject": "Need help putting array into HTML code to format email",
        "title": "Need help putting array into HTML code to format email",
        "time": "Unknown",
        "sender": "Unknown",
        "content": [
            "The user is seeking assistance in formatting an array into HTML code for an email.",
            "Details include SMTP server information and initial code snippets.",
            "No specific time information is available in the search results."
        ]
    }
]



export default function Main() {
    const fullData = data.map((datum) => (
        <section></section>
    )

  return (
    <div>
      
    </div>
  )
}
