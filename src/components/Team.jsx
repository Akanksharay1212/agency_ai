import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Team = () => {
  return (
    <div className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-800 dark:text-white'>
      
      <Title
        title='Meet the team'
        desc='A passionate team of digital experts dedicated to your brand’s success.'
      />

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        {teamData.map((team, index) => (
          <div
            key={index}
            className='flex items-center gap-4 bg-white dark:bg-gray-900
                       p-5 rounded-2xl border border-gray-100 dark:border-gray-700
                       shadow-sm hover:shadow-md transition-all'
          >
            {/* Profile Image */}
            <img
              src={team.image}
              alt={team.name}
              className='w-12 h-12 rounded-full object-cover'
            />

            {/* Name & Role */}
            <div>
              <h3 className='font-semibold text-sm'>{team.name}</h3>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                {team.title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Team
