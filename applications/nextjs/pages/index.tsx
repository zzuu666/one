import React from 'react'
import { Input, Card } from '../components'

function HomePage() {
  return (
    <div className="grid grid-cols-5 bg-gray-100 gap-4 pr-4">
      <div className="col-span-1 h-screen bg-white rounded-r-2xl px-4 py-6 shadow">
        <h2 className="text-3xl font-bold">Next Design</h2>
        <Input placeholder="搜索" className="my-4" />
        <div className="w-full">
          <div className="text-xl py-2">Placeholder</div>
          <div className="text-xl py-2">Placeholder</div>
          <div className="text-xl py-2">Placeholder</div>
          <div className="text-xl py-2">Placeholder</div>
        </div>
      </div>
      <div className="col-span-4 grid-rows-none h-screen overflow-auto">
        <div className="grid grid-cols-3 grid-cols-r-3-1 gap-4">
          <Card className="w-full" />
          <Card className="w-full">
            <div className="w-full pb-p100" />
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 h-fit">
            <h2 className="text-2xl">Placeholder</h2>
          </div>
          <Card className="w-full h-10" />
          <Card className="w-full h-10" />
          <Card className="w-full h-10" />
          <Card className="w-full h-10" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
