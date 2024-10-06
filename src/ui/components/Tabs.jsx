import { useState } from 'react';

import './TabsStyles.css';

// Componente Tabs
export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.value);

  return (
    <div>
      {/* Lista de pestañas */}
      <div className="tabs-list">
        {children.map((tab) => (
          <button
            key={tab.props.value}
            className={`tab-trigger ${activeTab === tab.props.value ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.props.value)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="tabs-content">
        {children.map((tab) =>
          tab.props.value === activeTab ? <div key={tab.props.value}>{tab.props.children}</div> : null
        )}
      </div>
    </div>
  );
};

// Componente TabTrigger (para definir las pestañas)
export const TabTrigger = ({ value, label, children }) => {
  return <div value={value} label={label}>{children}</div>;
};
