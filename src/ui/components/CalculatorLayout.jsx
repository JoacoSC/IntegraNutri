import React, { useState } from 'react'
import { CalculatorSelector } from './CalculatorSelector'
import { FoodCalculator } from './calculators/FoodCalculator'
import { PortionDistributionCalculator } from './calculators/PortionDistributionCalculator'
import { EnergyRequirementCalculator } from './calculators/EnergyRequirementCalculator'
import { HeightEstimationCalculator } from './calculators/HeightEstimationCalculator'
import { LogOutIcon } from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CalculatorLayout = () => {
  const [selectedCalculator, setSelectedCalculator] = useState('food')
  const [isSelectorOpen, setIsSelectorOpen] = useState(true)

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'food':
        return <FoodCalculator />
      case 'portion':
        return <PortionDistributionCalculator />
      case 'energy-children':
        return <EnergyRequirementCalculator type="children" />
      case 'energy-personalized':
        return <EnergyRequirementCalculator type="personalized" />
      case 'energy-adults':
        return <EnergyRequirementCalculator type="adults" />
      case 'energy-personalized-2':
        return <EnergyRequirementCalculator type="personalized-2" />
      case 'height':
        return <HeightEstimationCalculator />
      default:
        return <FoodCalculator />
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f8f5ff] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/hand-drawn-vegetables-fruits-pattern_23-2149483429.jpg?w=740&t=st=1712531269~exp=1712531869~hmac=3db2af3c1f2c2d3a4a3e7c336c3e8c8a1a1c8f5c8e9b2d6d3c7b8c6a2a3b6d9')",
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
        }}
      ></div>
      {/* Left sidebar placeholder */}
      <div className="fixed left-0 top-0 bottom-0 w-20 bg-[#4a2a82] z-10"></div>
      {/* Main content */}
      <div className="ml-20 relative z-10">
        {/* Header */}
        <div className="bg-[#4a2a82] text-white p-4 px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Nut. Joaquin Salinas Castillo
          </h1>
          <button className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white py-2 px-4 rounded-md flex items-center">
            <LogOutIcon size={18} className="mr-2" />
            Cerrar sesión
          </button>
        </div>
        {/* Calculator with integrated selector */}
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm flex overflow-hidden">
            {/* Selector sidebar */}
            <div
              className={`border-r border-gray-200 transition-all duration-300 ${isSelectorOpen ? 'w-72' : 'w-0 overflow-hidden'}`}
            >
              <CalculatorSelector
                selectedCalculator={selectedCalculator}
                onSelectCalculator={setSelectedCalculator}
              />
            </div>
            {/* Calculator content */}
            <div className="flex-1 relative">
              <div className="p-6">
                {/* Toggle button */}
                <button
                  onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                  className="absolute -ml-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4a2a82] focus:ring-opacity-50 z-10"
                >
                  {isSelectorOpen ? (
                    <ChevronLeft size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                {renderCalculator()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}