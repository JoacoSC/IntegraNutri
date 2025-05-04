import React, { useEffect, useState } from 'react'
import {
  Calculator,
  Utensils,
  PieChart,
  Baby,
  UserCircle,
  Users,
  Ruler,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  Apple,
  Brain,
  Gauge,
  ChefHat,
  ListTree,
} from 'lucide-react'

export const CalculatorSelector = ({ selectedCalculator, onSelectCalculator }) => {
  const [openCategory, setOpenCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const categories = [
    {
      id: 'food',
      label: 'Calculadoras de Alimentos',
      color: '#4a2a82',
      icon: <ChefHat size={20} />,
      calculators: [
        {
          id: 'foodCalc', // Cambiado de 'food' a 'foodCalc'
          label: 'Calculadora de Alimentos',
          icon: <Apple size={20} />,
        },
        {
          id: 'portionDist', // Cambiado de 'portion' a 'portionDist'
          label: 'Distribución de Porciones',
          icon: <Utensils size={20} />,
        },
      ],
    },
    {
      id: 'children',
      label: 'Requerimientos Infantiles',
      color: '#4a2a82',
      icon: <Baby size={20} />,
      calculators: [
        {
          id: 'pediatricCalc', // Cambiado de 'energy-children' a 'pediatricCalc'
          label: 'Requerimientos Energéticos',
          icon: <Baby size={20} />,
        },
        {
          id: 'customCalc', // Cambiado de 'energy-personalized' a 'customCalc'
          label: 'Requerimientos Personalizados',
          icon: <PieChart size={20} />,
        },
      ],
    },
    {
      id: 'adults',
      label: 'Requerimientos Adultos',
      color: '#4a2a82',
      icon: <Users size={20} />,
      calculators: [
        {
          id: 'adultCalc', // Cambiado de 'energy-adults' a 'adultCalc'
          label: 'Requerimientos Energéticos',
          icon: <Users size={20} />,
        },
        {
          id: 'adultCustomCalc', // Cambiado de 'energy-personalized-2' a 'adultCustomCalc'
          label: 'Requerimientos Personalizados',
          icon: <PieChart size={20} />,
        },
      ],
    },
    {
      id: 'other',
      label: 'Otras Calculadoras',
      color: '#4a2a82',
      icon: <ListTree size={20} />,
      calculators: [
        {
          id: 'height', // Sin cambios
          label: 'Estimación de Altura',
          icon: <Ruler size={20} />,
          comingSoon: true,
        },
      ],
    },
  ];

  const allCalculators = categories.flatMap((category) =>
    category.calculators.map((calc) => ({
      ...calc,
      categoryId: category.id,
      categoryColor: category.color,
    }))
  )

  const filteredCalculators = searchQuery
    ? allCalculators.filter((calc) =>
        calc.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      calculators: category.calculators.filter((calc) =>
        calc.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.calculators.length > 0)

  useEffect(() => {
    setIsSearching(searchQuery.length > 0)
  }, [searchQuery])

  const renderSearchResults = () => (
    <div className="py-2">
      {filteredCalculators.length === 0 ? (
        <div className="px-4 py-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-3">
            <Search className="text-[#4a2a82]" size={20} />
          </div>
          <p className="text-sm text-gray-500">No se encontraron calculadoras</p>
        </div>
      ) : (
        <div className="space-y-1">
          {filteredCalculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => !calc.comingSoon && onSelectCalculator(calc.id)}
              className={`w-full px-4 py-3 flex items-center text-sm transition-all duration-200 
                ${selectedCalculator === calc.id ? 'bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-[#4a2a82]' : 'hover:bg-purple-50'} 
                ${calc.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={calc.comingSoon}
            >
              <span
                className={`mr-3 ${selectedCalculator === calc.id ? 'text-[#4a2a82]' : 'text-gray-400'}`}
              >
                {calc.icon}
              </span>
              <div className="flex flex-col items-start">
                <span
                  className={`${selectedCalculator === calc.id ? 'text-[#4a2a82] font-medium' : 'text-gray-700'}`}
                >
                  {calc.label}
                </span>
                <span className="text-xs text-gray-500">
                  {categories.find((c) => c.id === calc.categoryId)?.label}
                </span>
              </div>
              {calc.comingSoon && (
                <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  Próximamente
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col bg-white border-purple-900 border-l-2 border-t-2 border-b-2" style={{borderRadius: '18px 0 0 18px'}}>
      <div className="px-6 border-b border-gray-200 flex items-center border-r" style={{height: '80px'}}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={18} />
          </div>
          <input
            type="text"
            placeholder="Buscar calculadora..."
            className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm 
              focus:outline-none focus:ring-2 focus:ring-[#4a2a82] duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X
                size={16}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {isSearching ? (
          renderSearchResults()
        ) : (
          <div className="divide-y divide-gray-100">
            {categories.map((category) => (
              <div key={category.id} className="group">
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category.id ? null : category.id)
                  }
                  className={`w-full px-4 py-3.5 flex items-center justify-between transition-all duration-200
                    ${openCategory === category.id ? ' border-l-4 border-[#4a2a82]' : 'hover:bg-purple-50 group-hover:bg-purple-50/50'}`}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`${openCategory === category.id ? 'text-[#4a2a82]' : 'text-gray-400'}`}
                    >
                      {category.icon}
                    </span>
                    <span
                      className={`font-medium text-sm ${openCategory === category.id ? 'text-[#4a2a82]' : 'text-gray-700'}`}
                    >
                      {category.label}
                    </span>
                  </div>
                  <div
                    className={`transform transition-transform duration-200 ${openCategory === category.id ? 'rotate-180' : ''}`}
                  >
                    <ChevronDown
                      size={16}
                      className={`${openCategory === category.id ? 'text-[#4a2a82]' : 'text-gray-400'}`}
                    />
                  </div>
                </button>
                {openCategory === category.id && (
                  <div className="bg-purple-50/30">
                    {category.calculators.map((calc) => (
                      <button
                        key={calc.id}
                        onClick={() =>
                          !calc.comingSoon && onSelectCalculator(calc.id)
                        }
                        className={`w-full pl-11 pr-4 py-3 flex items-center text-sm transition-all duration-200
                          ${selectedCalculator === calc.id ? 'bg-white border-l-4 border-[#4a2a82]' : 'hover:bg-white'} 
                          ${calc.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
                        disabled={calc.comingSoon}
                      >
                        <span
                          className={`mr-3 ${selectedCalculator === calc.id ? 'text-[#4a2a82]' : 'text-gray-400'}`}
                        >
                          {calc.icon}
                        </span>
                        <span
                          className={
                            selectedCalculator === calc.id
                              ? 'text-[#4a2a82] font-medium'
                              : 'text-gray-600'
                          }
                        >
                          {calc.label}
                        </span>
                        {calc.comingSoon && (
                          <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            Próximamente
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}