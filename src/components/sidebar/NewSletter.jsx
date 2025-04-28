import React from 'react'

const NewSletter = () => {
    return (
        <> <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <form className="space-y-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white p-2 rounded"
                >
                    Sign Up
                </button>
            </form></>
    )
}

export default NewSletter