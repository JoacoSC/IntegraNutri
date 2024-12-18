import { useState } from 'react';
import './CalculatorsTabsStyles.css';

export const CalculatorsTabs = ({ children, customClass = '' }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.value);

  return (
    <div className={customClass}>
      {/* Lista de pestañas */}
      <div className="calculator-tabs-list">
        {children.map((tab) => (
          <button
            key={tab.props.value}
            className={`calculator-tab-trigger ${tab.props.customTabClass || ''} ${
              activeTab === tab.props.value ? 'active' : ''
            }`}
            onClick={() => setActiveTab(tab.props.value)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="calculator-tabs-content">
        {children.map((tab) =>
          tab.props.value === activeTab ? (
            <div
              key={tab.props.value}
              className={tab.props.customContentClass || ''}
            >
              {tab.props.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export const CalculatorsTabTrigger = ({ value, label, children, customTabClass = '', customContentClass = '' }) => {
  return (
    <div
      value={value}
      label={label}
      customTabClass={customTabClass}
      customContentClass={customContentClass}
    >
      {children}
    </div>
  );
};
