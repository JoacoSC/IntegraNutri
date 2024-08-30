import { useSelector } from 'react-redux';

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { ComparisonComponent } from './components';

export const CardBodyComposition = ({ commonProps }) => {

    const {
        anthropometry,
        anthropometryHistory,
      } = commonProps

      console.log('anthropometry: ', anthropometry)
      console.log('anthropometryHistory: ', anthropometryHistory)

    const { MGCarterKG, MMLeeKG, MRKG, MOKG, MGCarterPercent, MMLeePercent, MRPercent, MOPercent, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueCrestailiaca, InputPliegueBicipital, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna, InputPerimetroBrazoRelajado, InputPerimetroBrazoContraido, InputPerimetroPierna, InputPerimetroMuslo, InputPerimetroCintura, InputPerimetroCadera, SomatocartaX, SomatocartaY } = anthropometry;

    const skinFoldsArray = [
        { label: 'Tricipital', value: InputPliegueTricipital },
        { label: 'Subescapular', value: InputPliegueSubescapular },
        { label: 'Crestailiaca', value: InputPliegueCrestailiaca },
        { label: 'Bicipital', value: InputPliegueBicipital },
        { label: 'Supraespinal', value: InputPliegueSupraespinal },
        { label: 'Abdominal', value: InputPliegueAbdominal },
        { label: 'Muslo', value: InputPliegueMuslo },
        { label: 'Pierna', value: InputPlieguePierna },
    ]

    const perimetersArray = [
        { label: 'Brazo Relajado', value: InputPerimetroBrazoRelajado },
        { label: 'Brazo Contraído', value: InputPerimetroBrazoContraido },
        { label: 'Pierna', value: InputPerimetroPierna },
        { label: 'Muslo', value: InputPerimetroMuslo },
        { label: 'Cintura', value: InputPerimetroCintura },
        { label: 'Cadera', value: InputPerimetroCadera },
    ]

    const getMaxValue = (array) => Math.max(...array.map(item => item.value));
    const maxSkinFoldsValue = getMaxValue(skinFoldsArray);
    const maxPerimetersValue = getMaxValue(perimetersArray);

    const skinFoldsYMax = Math.ceil((maxSkinFoldsValue + 20) / 20) * 20;
    const perimetersYMax = Math.ceil((maxPerimetersValue + 20) / 20) * 20;

    const [firstRecord, setFirstRecord] = useState(null);
    const [secondRecord, setSecondRecord] = useState(null);

    const handleSelectionChange = (selector, record) => {
        if (selector === 'first') {
            setFirstRecord(record);
        } else {
            setSecondRecord(record);
        }
    };

    const [somatocartaOptions, setSomatocartaOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta la leyenda
            },
            title: {
                display: true,
                text: 'Somatocarta',
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: -9,
                max: 9,
                ticks: {
                  stepSize: 1,
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                min: -10,
                max: 16,
                ticks: {
                  stepSize: 2,
                },
            },
        },
    });
    const [somatocartaData, setSomatocartaData] = useState({
        datasets: [{
            label: 'Somatocarta:    ',
            data: [],
            borderColor: '#FF0000',
            backgroundColor: '#FF0000',
        }]
    });

    const [bodyCompositionKGOptions, setBodyCompositionKGOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false, // Oculta la leyenda
          },
          title: {
            display: true,
            text: 'Composición corporal (Kg)',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} kg`,
            },
          },
        },
        scales: {
          x: {
            type: 'category',
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
          },
          y: {
            type: 'linear',
            min: 0,
            max: 40,
            ticks: {
              stepSize: 5,
            },
          },
        },
    });
    
    const [bodyCompositionKGData, setBodyCompositionKGData] = useState({
        labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
        datasets: [
            {
            label: 'Composición corporal',
            data: [MGCarterKG, MMLeeKG, MRKG, MOKG],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            },
        ],
    });

    const [bodyCompositionPercentOptions, setBodyCompositionPercentOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
        legend: {
            display: true, // Mostrar la leyenda
            position: 'top',
        },
        title: {
            display: true,
            text: 'Composición corporal (%)',
        },
        tooltip: {
            callbacks: {
            label: (context) => `${context.raw}%`,
            },
        },
        },
    });

    const [skinFoldsData, setSkinFoldsData] = useState({
        labels: "Valor: ",
        datasets: [
            {
                label: skinFoldsArray.map( (data) => data.value ),
                data: skinFoldsArray.map( (data) => data.value ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
        ]
    });

    const [skinFoldsDataOptions, setSkinFoldsDataOptions] = useState({
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Pliegues',
            },
        },
        scales: {
            y: {
                min: 0,
                max: skinFoldsYMax,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    });
    
    const [perimetersData, setPerimetersData] = useState({
        labels: "Valor: ",
        datasets: [
            {
                label: perimetersArray.map( (data) => data.value ),
                data: perimetersArray.map( (data) => data.value ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
        ]
    });

    const [perimetersDataOptions, setPerimetersDataOptions] = useState({
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Perímetros',
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        // Limita el número de caracteres por línea
                        const maxLineLength = 10;
                        const label = this.getLabelForValue(value);
                        
                        // Divide el texto en líneas si es muy largo
                        if (label.length > maxLineLength) {
                            const words = label.split(' ');
                            const lines = [];
                            let currentLine = '';
                            
                            words.forEach(word => {
                                if ((currentLine + word).length > maxLineLength) {
                                    lines.push(currentLine);
                                    currentLine = word;
                                } else {
                                    currentLine += (currentLine === '' ? '' : ' ') + word;
                                }
                            });

                            if (currentLine.length > 0) {
                                lines.push(currentLine);
                            }

                            return lines;
                        } else {
                            return label;
                        }
                    },
                    maxRotation: 45,  // Evita que las etiquetas se roten
                    autoSkip: false,  // Evita que se omitan etiquetas
                },
            },
            y: {
                min: 0,
                max: perimetersYMax,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    });
    
    const [bodyCompositionPercentData, setBodyCompositionPercentData] = useState({
        labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
        datasets: [
        {
            label: 'Composición corporal',
            data: [MGCarterPercent, MMLeePercent, MRPercent, MOPercent],
            backgroundColor: [
            'rgba(54, 162, 235, 0.7)', // Azul
            'rgba(255, 159, 64, 0.7)', // Naranja
            'rgba(75, 192, 192, 0.7)', // Gris
            'rgba(255, 205, 86, 0.7)', // Amarillo
            ],
            borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)',
            ],
            borderWidth: 1,
        },
        ],
    });

    const updateSomatocartaChart = () => {
        setSomatocartaData({
            datasets: [{
                label: 'Somatocarta: ',
                data: [
                    { x: firstRecord?.SomatocartaX, y: firstRecord?.SomatocartaY },
                    { x: secondRecord?.SomatocartaX, y: secondRecord?.SomatocartaY },
                ].filter(record => record.x !== undefined && record.y !== undefined),
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            }]
        });
    }
    
// rgba(54, 162, 235, 0.7)
// rgba(255, 99, 132, 0.7)
    const updateBodyCompositionKGBarChart = () => {
        setBodyCompositionKGData({
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
            datasets: [
                {
                    label: 'Primera selección',
                    data: [firstRecord?.MGCarterKG, firstRecord?.MMLeeKG, firstRecord?.MRKG, firstRecord?.MOKG],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Segunda selección',
                    data: [secondRecord?.MGCarterKG, secondRecord?.MMLeeKG, secondRecord?.MRKG, secondRecord?.MOKG],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        });
    }
    
    
    const updateSkinFoldsLineChart = () => {
        setSkinFoldsData({
            labels: skinFoldsArray.map(data => data.label),
            datasets: [
                {
                    label: 'Primera selección',
                    data: [
                        firstRecord?.InputPliegueTricipital, firstRecord?.InputPliegueSubescapular, firstRecord?.InputPliegueCrestailiaca, 
                        firstRecord?.InputPliegueBicipital, firstRecord?.InputPliegueSupraespinal, firstRecord?.InputPliegueAbdominal, 
                        firstRecord?.InputPliegueMuslo, firstRecord?.InputPlieguePierna
                    ],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    pointRadius: 4,
                },
                {
                    label: 'Segunda selección',
                    data: [
                        secondRecord?.InputPliegueTricipital, secondRecord?.InputPliegueSubescapular, secondRecord?.InputPliegueCrestailiaca, 
                        secondRecord?.InputPliegueBicipital, secondRecord?.InputPliegueSupraespinal, secondRecord?.InputPliegueAbdominal, 
                        secondRecord?.InputPliegueMuslo, secondRecord?.InputPlieguePierna
                    ],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    pointRadius: 4,
                },
            ],
        });
    }
    

    const updatePerimetersLineChart = () => {
        setPerimetersData({
            labels: perimetersArray.map(data => data.label),
            datasets: [
                {
                    label: 'Primera selección',
                    data: [
                        firstRecord?.InputPerimetroBrazoRelajado, firstRecord?.InputPerimetroBrazoContraido, 
                        firstRecord?.InputPerimetroPierna, firstRecord?.InputPerimetroMuslo, 
                        firstRecord?.InputPerimetroCintura, firstRecord?.InputPerimetroCadera
                    ],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    pointRadius: 4,
                },
                {
                    label: 'Segunda selección',
                    data: [
                        secondRecord?.InputPerimetroBrazoRelajado, secondRecord?.InputPerimetroBrazoContraido, 
                        secondRecord?.InputPerimetroPierna, secondRecord?.InputPerimetroMuslo, 
                        secondRecord?.InputPerimetroCintura, secondRecord?.InputPerimetroCadera
                    ],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    pointRadius: 4,
                },
            ],
        });
    }
    
    
    const updateBodyCompositionPercentDoughnutChart = () => {
        setBodyCompositionPercentData({
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
            datasets: [
                {
                    label: 'Primera selección',
                    data: [firstRecord?.MGCarterPercent, firstRecord?.MMLeePercent, firstRecord?.MRPercent, firstRecord?.MOPercent],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)',
                    ],
                    borderWidth: 1,
                },
                {
                    label: 'Segunda selección',
                    data: [secondRecord?.MGCarterPercent, secondRecord?.MMLeePercent, secondRecord?.MRPercent, secondRecord?.MOPercent],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        });
    }
    

    useEffect(() => {
        updateSomatocartaChart();
    }, [firstRecord, secondRecord]);
    
    useEffect(() => {
        updateBodyCompositionKGBarChart();
    }, [firstRecord, secondRecord]);
    
    useEffect(() => {
        updateBodyCompositionPercentDoughnutChart();
    }, [firstRecord, secondRecord]);
    
    useEffect(() => {
        updateSkinFoldsLineChart();
    }, [firstRecord, secondRecord]);
    
    useEffect(() => {
        updatePerimetersLineChart();
    }, [firstRecord, secondRecord]);    
    
    return (
        <div className='patient-secondary-card full-width-card'>
            <div className='patient-secondary-card-title'>
                Composición corporal
            </div>
            <div className='patient-secondary-card-content flex-column gap-2'>
                <ComparisonComponent 
                    anthropometryHistory={anthropometryHistory} 
                    onSelectionChange={handleSelectionChange} 
                />
                <div className='flex-row h-100 mt-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                    <div className="canvas-chart">
                        <Bar data={bodyCompositionKGData} options={bodyCompositionKGOptions} />
                    </div>
                    <div className="canvas-chart">
                        <Doughnut data={bodyCompositionPercentData} options={bodyCompositionPercentOptions} />
                    </div>
                </div>
                <div className='flex-row h-100 mb-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                    <div className="canvas-chart">
                        <Line data={perimetersData} options={perimetersDataOptions} />
                    </div>
                    <div className="canvas-chart">
                        <Line data={skinFoldsData} options={skinFoldsDataOptions} />
                    </div>
                </div>
                <div className='flex-row h-100 mb-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                    <div className="canvas-anthropometry-container">
                        <div className="canvas-anthropometry">
                            <Scatter data={somatocartaData} options={somatocartaOptions} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

