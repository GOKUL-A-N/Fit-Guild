import React from 'react';
import TrainerCard from '../components/TrainerCard';
import { trainerCards } from '../constants';


const Trainers = () => {
  return (
    <div className='flex-1'>
      <h1 className='heading1 font-bold flex justify-center text-[32px] p-5'>TRAINERS</h1>
      <div className='flex p-10 overflow-x-scroll sm:overflow-hidden flex-row sm:min-w-[192px] min-w-[120px] '>
          {trainerCards.map((tc,index) => (
              <div key={tc.id}>
                <TrainerCard 
                  trainerName={tc.trainerName}
                  trainerAge={tc.age}
                  trainerExperience={tc.experience}
                  trainerRating={tc.rating}
                  trainerCost={tc.cost}
                  trainerImage={tc.img}
                />

              </div>
          ))}
      </div>
    </div>
  )
}

export default Trainers