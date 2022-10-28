import React from "react"
import { contributors } from "../Helper"


const Contributor = () => {
  return (
    <>
      <h1>Contributors</h1>
      {contributors.map((contributor) => (
        <div key={contributor.id} className="w-full max-w-md rounded-lg border bg-learnpurple p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900">{contributor.name}</h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Linked in Icon
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {contributor.bio}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Github Icon
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      ))}
    </>
  )
}
     

export { Contributor }