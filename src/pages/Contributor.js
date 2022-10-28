import React from 'react'
import { contributors } from '../Helper'


const Contributor = () => {
  return (
    <>
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">Contributors</p>
          {contributors.map((contributors) => (
            <div class="text-gray-900 font-bold text-xl mb-2" key={contributors.id}>{contributors.name}</div>
        

           </div> 
          )}
        </div>
      </div>
          )
    </>
  );
}
      
export { Contributor }