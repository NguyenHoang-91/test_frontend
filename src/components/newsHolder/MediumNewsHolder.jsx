import React from 'react'


const MediumNewsHolder = ({ post, PlaceHolder }) => {
    return (
        
        <div className="bg-white rounded-lg overflow-hidden shadow">
            
        <img
            src={PlaceHolder}
            alt={post.title}
            className="w-full h-40 object-cover"
        />
        <div className="p-3">
            <p className="text-xs text-red-500 mb-1">
                {post.category} / {post.date}
            </p>
            <h4 className="text-sm font-semibold">
                {post.title}
            </h4>
        </div>
    </div>
    )
}

export default MediumNewsHolder