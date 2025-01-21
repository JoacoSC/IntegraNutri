import React from 'react';

export const MoleculeDistribution = ({ totalKcal, carbPercentage, proteinPercentage, fatPercentage }) => {
  if (!totalKcal) return null;

  const calculateGrams = (percentage, kcalPerGram) => {
    const kcal = (totalKcal * percentage) / 100;
    return (kcal / kcalPerGram).toFixed(1);
  };

  const carbGrams = calculateGrams(carbPercentage, 4);
  const proteinGrams = calculateGrams(proteinPercentage, 4);
  const fatGrams = calculateGrams(fatPercentage, 9);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '20px',
    },
    barContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      width: '150px',
      fontWeight: '500',
      fontSize: '0.9rem',
      color: '#1e293b',
    },
    barWrapper: {
      flex: 1,
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
      marginRight: '10px',
    },
    bar: {
      height: '100%',
      borderRadius: '4px',
    },
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: '#1e293b',
    },
    percentageInput: {
      width: '50px',
      textAlign: 'center',
      marginRight: '5px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      padding: '2px',
    },
    grams: {
      marginLeft: '5px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Distribución de la molécula calórica</div>
      <div style={styles.barContainer}>
        <div style={styles.label}>
          <span style={{ backgroundColor: '#f97316', borderRadius: '50%', width: '10px', height: '10px', marginRight: '10px' }}></span>
          Proteínas
        </div>
        <div style={styles.barWrapper}>
          <div
            style={{
              ...styles.bar,
              backgroundColor: '#f97316',
              width: `${proteinPercentage}%`,
            }}
          ></div>
        </div>
        <div style={styles.inputWrapper}>
          <input
            type="number"
            value={proteinPercentage}
            readOnly
            style={styles.percentageInput}
          />
          %
          <span style={styles.grams}>{proteinGrams} g</span>
        </div>
      </div>
      <div style={styles.barContainer}>
        <div style={styles.label}>
          <span style={{ backgroundColor: '#eab308', borderRadius: '50%', width: '10px', height: '10px', marginRight: '10px' }}></span>
          Lípidos
        </div>
        <div style={styles.barWrapper}>
          <div
            style={{
              ...styles.bar,
              backgroundColor: '#eab308',
              width: `${fatPercentage}%`,
            }}
          ></div>
        </div>
        <div style={styles.inputWrapper}>
          <input
            type="number"
            value={fatPercentage}
            readOnly
            style={styles.percentageInput}
          />
          %
          <span style={styles.grams}>{fatGrams} g</span>
        </div>
      </div>
      <div style={styles.barContainer}>
        <div style={styles.label}>
          <span style={{ backgroundColor: '#ef4444', borderRadius: '50%', width: '10px', height: '10px', marginRight: '10px' }}></span>
          CHO
        </div>
        <div style={styles.barWrapper}>
          <div
            style={{
              ...styles.bar,
              backgroundColor: '#ef4444',
              width: `${carbPercentage}%`,
            }}
          ></div>
        </div>
        <div style={styles.inputWrapper}>
          <input
            type="number"
            value={carbPercentage}
            readOnly
            style={styles.percentageInput}
          />
          %
          <span style={styles.grams}>{carbGrams} g</span>
        </div>
      </div>
    </div>
  );
};
