import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Page5 = ({progressData}) => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 px-8 py-16 bg-white">
    <h2 className="text-4xl font-semibold text-indigo-700 mb-6">Your Weekly Progress</h2>

    {/* Progress Graphs */}
    <div className="flex space-x-8">
      {/* Step Progress */}
      <div className="text-center">
        <h4 className="text-lg font-semibold">Steps</h4>
        <div className="w-40 h-40">
          <CircularProgressbar
            value={progressData.steps}
            maxValue={10000} // Max steps per day
            text={`${progressData.steps}%`}
            styles={buildStyles({
              pathColor: '#4caf50', 
              textColor: '#333',
              trailColor: '#ddd',
              strokeWidth: 12,
            })}
          />
        </div>
      </div>

      {/* Calorie Burn Progress */}
      <div className="text-center">
        <h4 className="text-lg font-semibold">Calories Burned</h4>
        <div className="w-40 h-40">
          <CircularProgressbar
            value={progressData.calories}
            maxValue={2000} // Max calories per day
            text={`${progressData.calories}%`}
            styles={buildStyles({
              pathColor: '#ff5722', 
              textColor: '#333',
              trailColor: '#ddd',
              strokeWidth: 12,
            })}
          />
        </div>
      </div>

      {/* Sport Exercise Progress */}
      <div className="text-center">
        <h4 className="text-lg font-semibold">Sport Exercise</h4>
        <div className="w-40 h-40">
          <CircularProgressbar
            value={progressData.sportExercise}
            maxValue={60} // Max minutes per day
            text={`${progressData.sportExercise}%`}
            styles={buildStyles({
              pathColor: '#2196f3', 
              textColor: '#333',
              trailColor: '#ddd',
              strokeWidth: 12,
            })}
          />
        </div>
      </div>
    </div>

    {/* Weekly, Monthly Progress */}
    <div className="space-y-4 text-center">
      <h3 className="text-3xl font-semibold text-purple-700">Weekly Progress</h3>
      <p className="text-lg text-gray-600">Steps: {progressData.weeklySteps} / 70000 steps</p>
      <p className="text-lg text-gray-600">Calories: {progressData.weeklyCalories} / 14000 calories</p>
      <p className="text-lg text-gray-600">Sport Exercise: {progressData.weeklySportExercise} / 420 minutes</p>
    </div>
  </section>
  )
}

export default Page5