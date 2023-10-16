import React from 'react'

const Section = ({data={
    super: "Supper text",
    main: "Main title",
    sub: "NodesTheme subtitle"
}}:{data: {
    super: String,
    main: String,
    sub: String
}}) => {
  return (
    <div className="nt-element nt-elm-section mx-auto max-w-2xl lg:text-center">
        <h4 className="text-base font-semibold leading-7 text-indigo-600">{data.super}</h4>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.main}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{data.sub}</p>
    </div>
  )
}

export default Section