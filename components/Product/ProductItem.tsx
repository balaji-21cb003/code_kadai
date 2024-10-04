import React from 'react';

const ProductItem = ({ product }) => {
    const extractGoogleDriveID = (url) => {
        const match = url.match(/[-\w]{25,}/);
        return match ? match[0] : null;
    };

    const videoId = extractGoogleDriveID(product.video);

    return (
        <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">{product.category}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{product.title}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
                {product.link && (
                    <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Download App
                    </a>
                )}
                <a href="#" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-600">
                    Schedule a demo <span aria-hidden="true">→</span>
                </a>
            </div>

            {/* Video Section */}
            {videoId && (
                <div className="relative w-full overflow-hidden rounded-xl shadow-xl mt-6">
                    <iframe
                        src={`https://drive.google.com/file/d/${videoId}/preview`}
                        title="Google Drive Video"
                        className="w-full h-64 sm:h-80 lg:h-full"
                        allow="autoplay"
                    ></iframe>
                </div>
            )}
        </section>
    );
};

export default ProductItem;
