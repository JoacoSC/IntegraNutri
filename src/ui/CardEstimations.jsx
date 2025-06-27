import React, { useState } from 'react'
import {
  RulerIcon,
  ScaleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  UserIcon,
  ClockIcon,
} from 'lucide-react'
export function CardEstimations({ estimations }) {
    const [activeTab, setActiveTab] = useState('height')
    const { heightEstimation, weightEstimation } = estimations;

    return (
        <div className="w-[400px] rounded-lg shadow-md overflow-hidden bg-white mt-8">
        <div className="patient-secondary-card-title flex justify-between items-center">
            <h2 className="card-energy-requirements-title">
                Estimaciones
            </h2>
        </div>
        <div className="flex border-b border-slate-200">
            <button
            className={`flex-1 py-3 px-4 text-center font-medium inline-flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'height' ? 'text-purple-800 border-b-2 border-purple-800' : 'text-slate-600 hover:text-purple-800'}`}
            onClick={() => setActiveTab('height')}
            >
            <RulerIcon className="w-4 h-4" />
            Altura
            </button>
            <button
            className={`flex-1 py-3 px-4 text-center font-medium inline-flex items-center justify-center gap-2 cursor-pointer ${activeTab === 'weight' ? 'text-purple-800 border-b-2 border-purple-800' : 'text-slate-600 hover:text-purple-800'}`}
            onClick={() => setActiveTab('weight')}
            >
            <ScaleIcon className="w-4 h-4" />
            Peso
            </button>
        </div>
        <div className="p-6">
        {activeTab === 'height' ? (
          heightEstimation ? (
            <>
              {/* --- contenido altura --- */}
              <div className="text-center mb-6 border-b border-slate-100">
                <div className="text-slate-500 mb-2">Altura estimada</div>
                <div className="text-4xl font-bold text-purple-800 pb-4">
                  {heightEstimation.estimate.toFixed(0)} cm
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="bg-red-50 px-4 pb-4 pt-8 rounded-lg flex justify-center flex-col text-center">
                    <div className="text-sm text-slate-600">
                        Desviación negativa
                    </div>
                    <div className="text-xl font-semibold text-red-700">
                        {heightEstimation.deviationNeg.toFixed(0)} cm
                    </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="bg-green-50 px-4 pb-4 pt-8 rounded-lg flex justify-center flex-col text-center">
                    <div className="text-sm text-slate-600">
                        Desviación positiva
                    </div>
                    <div className="text-xl font-semibold text-green-700">
                        {heightEstimation.deviationPos.toFixed(0)} cm
                    </div>
                    </div>
                </div>
                </div>
                {/* Sampling Data Section */}
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                    <ClockIcon className="w-4 h-4" />
                    <span>Datos registrados el {heightEstimation.samplingDate}</span>
                </div>
                <div className="space-y-4">
                    {/* Patient Info */}
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-slate-500">
                        Datos del paciente
                        </div>
                        <div className="text-slate-900">
                        {heightEstimation.patientAge} años • {heightEstimation.patientSex}
                        </div>
                    </div>
                    {/* Knee Height */}
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-slate-500">
                        Altura de rodilla
                        </div>
                        <div className="text-slate-900">{heightEstimation.kneeHeight} cm</div>
                    </div>
                    
                </div>
                </div>
            </>
            ) : (
                <div className="text-center text-slate-500">
                No hay datos de estimación de altura disponibles.
                </div>
            )
            ) : (
          weightEstimation ? (
            <>
              {/* --- contenido peso --- */}
              <div className="text-center mb-6 border-b border-slate-100">
                <div className="text-slate-500 mb-2">Peso estimado</div>
                <div className="text-4xl font-bold text-purple-800 pb-4">
                  {weightEstimation.estimate.toFixed(1)} kg
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="bg-red-50 px-4 pb-4 pt-8 rounded-lg flex justify-center flex-col text-center">
                    <div className="text-sm text-slate-600">
                        Desviación negativa
                    </div>
                    <div className="text-xl font-semibold text-red-700">
                        {weightEstimation.deviationNeg.toFixed(1)} kg
                    </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="bg-green-50 px-4 pb-4 pt-8 rounded-lg flex justify-center flex-col text-center">
                    <div className="text-sm text-slate-600">
                        Desviación positiva
                    </div>
                    <div className="text-xl font-semibold text-green-700">
                        {weightEstimation.deviationPos.toFixed(1)} kg
                    </div>
                    </div>
                </div>
                </div>
                {/* Sampling Data Section */}
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                    <ClockIcon className="w-4 h-4" />
                    <span>Datos registrados el {weightEstimation.samplingDate}</span>
                </div>
                <div className="space-y-4">
                    {/* Patient Info */}
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-slate-500">
                        Datos del paciente
                        </div>
                        <div className="text-slate-900">
                        {weightEstimation.patientAge} años • {weightEstimation.patientSex}
                        </div>
                    </div>
                    
                    {/* Measurements Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="text-center">
                        <p className="text-gray-600 text-sm">Altura de rodilla</p>
                        <p className="">{weightEstimation.kneeHeight} cm</p>
                        </div>
                        <div className="text-center">
                        <p className="text-gray-600 text-sm">Perímetro braquial</p>
                        <p className="">{weightEstimation.brachial} cm</p>
                        </div>
                        <div className="text-center">
                        <p className="text-gray-600 text-sm">P. de pantorrilla</p>
                        <p className="">{weightEstimation.calf} cm</p>
                        </div>
                        <div className="text-center">
                        <p className="text-gray-600 text-sm">Pliegue subescapular</p>
                        <p className="">{weightEstimation.subscapular} mm</p>
                        </div>
                    </div>
                </div>
                </div>
                </>
          ) : (
            <div className="text-center text-slate-500">
              No hay datos de estimación de peso disponibles.
            </div>
          )
            )}
        </div>
        </div>
    )
}