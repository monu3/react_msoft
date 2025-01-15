import React, { useState } from 'react'
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input'

const CacheSettings = () => {
  const [cacheSize, setCacheSize]=useState<number>(3.1254);

  const clearCache = () =>{
    setCacheSize(0);
    alert("Cache cleared !!");
  }
  return (
    <div className=''>
      <form>
        <div>
          <div className='flex flex-col mb-4'>
          <label htmlFor='cacheSize' className="flex-grow text-gray-700 mb-2">Current Cache Size</label>
          <div>
          <Input
          id='cacheSize'
          name="cache-size"
          type="number"
          value={cacheSize}
          className='w-3/4 p-2 border border-gray-300 rounded-md text-left inline'
          readOnly
          />
          <div className='ml-2 border border-gray-300 rounded-md inline'>MB</div>
          </div>
          </div>
          <div className='flex justify-end'>
          <Button onClick={clearCache}>Clear Cache</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CacheSettings