import React from 'react'

const FollowUs = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-600 text-white p-3 flex flex-col items-center">
                    <span>FB</span>
                    <span className="text-sm">12.5K Fans</span>
                </div>
                <div className="bg-pink-500 text-white p-3 flex flex-col items-center">
                    <span>IG</span>
                    <span className="text-sm">10.4K Followers</span>
                </div>
                <div className="bg-blue-400 text-white p-3 flex flex-col items-center">
                    <span>TW</span>
                    <span className="text-sm">8.3K Followers</span>
                </div>
                <div className="bg-red-600 text-white p-3 flex flex-col items-center">
                    <span>YT</span>
                    <span className="text-sm">15.2K Subscribers</span>
                </div>
                <div className="bg-green-500 text-white p-3 flex flex-col items-center">
                    <span>WA</span>
                    <span className="text-sm">7.8K Contacts</span>
                </div>
                <div className="bg-blue-800 text-white p-3 flex flex-col items-center">
                    <span>TE</span>
                    <span className="text-sm">9.1K Followers</span>
                </div>
            </div>
        </>
    )
}

export default FollowUs