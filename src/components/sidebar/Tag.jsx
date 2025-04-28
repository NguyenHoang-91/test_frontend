import React from 'react'

const Tag = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Politics</span>
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Business</span>
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Technology</span>
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Health</span>
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Sports</span>
                <span className="px-3 py-1 border border-gray-400 text-sm text-gray-600 rounded">Entertainment</span>
            </div>
        </>

    )
}
export default Tag