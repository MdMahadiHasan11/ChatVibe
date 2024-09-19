import React from 'react';

const page = () => {
    return (
<section className="mt-10 md:mt-20">
    <div className="container mx-auto p-6 overflow-x-auto">
        <table className="w-full">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
                <tr>
                    <th></th>
                    <th scope="col" className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="px-2 text-lg font-medium">Starter</h2>
                        <p className="mb-3">
                            <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">0$</span>
                            <span className="font-medium dark:text-gray-600">/mo</span>
                        </p>
                        <button disabled className="px-6 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition-colors duration-300">
                            Free
                        </button>
                    </th>
                    <th scope="col" className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="px-2 text-lg font-medium">Standard</h2>
                        <p className="mb-3">
                            <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">19$</span>
                            <span className="font-medium dark:text-gray-600">/mo</span>
                        </p>
                        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition-colors duration-300">
                            Buy Now
                        </button>
                    </th>
                    <th scope="col" className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="px-2 text-lg font-medium">Premium</h2>
                        <p className="mb-3">
                            <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">49$</span>
                            <span className="font-medium dark:text-gray-600">/mo</span>
                        </p>
                        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition-colors duration-300">
                            Buy Now
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
                <tr className="hover:bg-gray-200 transition duration-300 ease-in-out">
                    <th scope="row" className="text-left">
                        <h3 className="py-3">Video Call Minutes</h3>
                    </th>
                    <td>
                        <span className="block text-sm">100 min</span>
                    </td>
                    <td>
                        <span className="block text-sm">500 min</span>
                    </td>
                    <td>
                        <span className="block text-sm">Unlimited</span>
                    </td>
                </tr>
                <tr className="hover:bg-gray-200 transition duration-300 ease-in-out">
                    <th scope="row" className="text-left">
                        <h3 className="py-3">Storage</h3>
                    </th>
                    <td>
                        <span className="block text-sm">0.5 GB</span>
                    </td>
                    <td>
                        <span className="block text-sm">10 GB</span>
                    </td>
                    <td>
                        <span className="block text-sm">100 GB</span>
                    </td>
                </tr>
                <tr className="hover:bg-gray-200 transition duration-300 ease-in-out">
                    <th scope="row" className="text-left">
                        <h3 className="py-3">High-Quality Video</h3>
                    </th>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr className="hover:bg-gray-200 transition duration-300 ease-in-out">
                    <th scope="row" className="text-left">
                        <h3 className="py-3">Multi-User Calls</h3>
                    </th>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-400">
                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
    );
};

export default page;
