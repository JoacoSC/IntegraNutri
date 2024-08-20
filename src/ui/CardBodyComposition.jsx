import { useSelector } from 'react-redux';

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

export const CardBodyComposition = ({ patientID }) => {

    const { anthropometry } = useSelector((state) => state.currentPatient);

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
                data: [{ x: SomatocartaX, y: SomatocartaY }],
                borderColor: '#FF0000',
                backgroundColor: '#FF0000',
            }]
        });
    }

    const updateBodyCompositionKGBarChart = () => {
        setBodyCompositionKGData({
          labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
          datasets: [
            {
              label: 'Composición corporal',
              data: [MGCarterKG, MMLeeKG, MRKG, MOKG],
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      };
    
    const updateSkinFoldsLineChart = () => {
        setSkinFoldsData({
        labels: skinFoldsArray.map( (data) => data.label ),
        datasets: [
            {
                label: 'Medida del pliegue (mm)',
                data: skinFoldsArray.map( (data) => data.value ),
                backgroundColor: 'rgba(0,174,239, 0.5)',
                borderColor: 'rgba(0,174,239, 1)',
                pointRadius: 4,
            },
        ]
        });
    };

    const updatePerimetersLineChart = () => {
        setPerimetersData({
        labels: perimetersArray.map( (data) => data.label ),
        datasets: [
            {
                label: 'Perímetros (cm)',
                data: perimetersArray.map( (data) => data.value ),
                backgroundColor: 'rgba(233, 87, 147, 0.5)',
                borderColor: 'rgba(233, 87, 147, 1)',
                pointRadius: 4,
            },
        ]
        });
    };
    
    const updateBodyCompositionPercentDoughnutChart = () => {
        setBodyCompositionPercentData({
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
    };

    useEffect(() => {
        updateSomatocartaChart();
    }, [SomatocartaX, SomatocartaY]);

    useEffect(() => {
        updateBodyCompositionKGBarChart();
    }, [MGCarterKG, MMLeeKG, MRKG, MOKG]);

    useEffect(() => {
        updateBodyCompositionPercentDoughnutChart();
    }, [MGCarterPercent, MMLeePercent, MRPercent, MOPercent]);

    useEffect(() => {
        updateSkinFoldsLineChart();
    }, [InputPliegueTricipital, InputPliegueSubescapular, InputPliegueCrestailiaca, InputPliegueBicipital, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna]);

    useEffect(() => {
        updatePerimetersLineChart();
    }, [InputPerimetroBrazoContraido, InputPerimetroBrazoRelajado, InputPerimetroPierna, InputPerimetroMuslo, InputPerimetroCintura, InputPerimetroCintura, ]);
    
    return (
        <div className='patient-secondary-card full-width-card'>
            <div className='patient-secondary-card-title'>
                Composición corporal
            </div>
            <div className='patient-secondary-card-content flex-column gap-2'>
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

