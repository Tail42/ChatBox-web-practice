import React from 'react'

const Conversation = () => {
  return (
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
				<div className='avator online'>
					<div className='w-12 rounded-full'>
						<img src="" alt='avator' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>Is me</p>
						<span className='text-xl'>😶‍🌫️</span>
					</div>
				</div>
		</div>
  )
}

export default Conversation