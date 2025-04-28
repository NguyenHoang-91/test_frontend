import React from 'react'

const TitleHolder = ({title}) => {
    return (
        <div className="bg-white p-4 shadow w-full mt-4 rounded-none">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <a href="#" className="text-blue-500 hover:underline">View all</a>
            </div>
        </div>
    )
}

export default TitleHolder