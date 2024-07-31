import React from 'react';

const CareerTimeline = () => {
  const milestones = [
    { id: 1, title: 'Education', description: "GLA Institute of Technology and Management", year: '2019', side: 'right' },
    { id: 2, title: 'Project', description: "Driver Drowsiness Real-Time Detection System", year: '2022', side: 'left' },
    { id: 3, title: 'Work Experience', description: 'React Engineer at BluePi', year: '2023 ', side: 'right' },
    
    // Add more milestones as needed
  ];

  return (
    <div className="flex flex-col items-center justify-left h-screen bg-black-100 py-8 w-50% rounded-xl">
      <div className="relative w-1 bg-white h-3/4 ">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`absolute w-full flex ${milestone.side === 'left' ? 'justify-end' : 'justify-start'} items-center transform transition-all duration-500 `}
            style={{ bottom: `${index * 30}%`, animationDelay: `${index * 0.5}s` }}
          >
            {milestone.side === 'left' && (
              <div className="mr-8">
                <div className="bg-slate-300 border border-gray-300 rounded-md p-4 shadow-lg mb-4 animate-slide-up">
                  <h3 className="font-bold text-lg">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                  <span className="text-sm text-gray-500">{milestone.year}</span>
                </div>
              </div>
            )}
            <div className="text-lg font-bold text-sky-500 mb-4">{milestone.year}</div>
            {milestone.side === 'right' && (
              <div className="ml-8">
                <div className="bg-slate-300 border border-gray-300 rounded-md p-4 shadow-lg mb-4 animate-slide-up">
                  <h3 className="font-bold text-lg">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                  <span className="text-sm text-gray-500">{milestone.year}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
