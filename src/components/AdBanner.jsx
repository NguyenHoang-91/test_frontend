import React from 'react'

const AdBanner = (Banner) => {
    console.log(Banner);
    return (
        <section className="w-full flex px-4 py-6">
            <div className="w-full max-w-[700px] h-[70px] overflow-hidden rounded-md shadow border border-gray-300">
                <img
                    src={Banner.Banner}
                    alt="Ad Banner"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

export default AdBanner