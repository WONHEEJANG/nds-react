import React from 'react';
import Label, { FillLabel, LineLabel, TextLabel, GrayLabel, GreenLabel, RedLabel, Grade1Label, Grade2Label, Grade3Label, Grade4Label, Grade5Label, Grade6Label } from '../Label';

const LabelExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Label Components</h2>
      
      {/* Fill Labels */}
      <div className="component-section">
        <h3 className="component-subtitle">Fill Labels</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <FillLabel color="gray">배지</FillLabel>
          <FillLabel color="green">배지</FillLabel>
          <FillLabel color="red">배지</FillLabel>
          <FillLabel color="skyblue">배지</FillLabel>
          <FillLabel color="yellow">배지</FillLabel>
        </div>
      </div>

      {/* Line Color Labels */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Color Labels</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <LineLabel color="blue">배지</LineLabel>
          <LineLabel color="gray">배지</LineLabel>
          <LineLabel color="green">배지</LineLabel>
          <LineLabel color="lightblue">배지</LineLabel>
          <LineLabel color="cobalt">배지</LineLabel>
          <LineLabel color="orange">배지</LineLabel>
          <LineLabel color="red">배지</LineLabel>
          <LineLabel color="skyblue">배지</LineLabel>
          <LineLabel color="yellow">배지</LineLabel>
        </div>
      </div>

      {/* Line Grade Labels */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Grade Labels</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <Grade1Label>1등급</Grade1Label>
          <Grade2Label>2등급</Grade2Label>
          <Grade3Label>3등급</Grade3Label>
          <Grade4Label>4등급</Grade4Label>
          <Grade5Label>5등급</Grade5Label>
          <Grade6Label>6등급</Grade6Label>
        </div>
      </div>

      {/* Text Label */}
      <div className="component-section">
        <h3 className="component-subtitle">Text Label</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <TextLabel htmlFor="input">레이블</TextLabel>
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <FillLabel color="gray">배지</FillLabel>
            <FillLabel color="green">배지</FillLabel>
            <FillLabel color="red">배지</FillLabel>
            <FillLabel color="skyblue">배지</FillLabel>
            <FillLabel color="yellow">배지</FillLabel>
            <FillLabel color="blue">배지</FillLabel>
            <FillLabel color="lightblue">배지</FillLabel>
            <FillLabel color="navy">배지</FillLabel>
            <FillLabel color="orange">배지</FillLabel>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <LineLabel color="blue">배지</LineLabel>
            <LineLabel color="gray">배지</LineLabel>
            <LineLabel color="green">배지</LineLabel>
            <LineLabel color="red">배지</LineLabel>
            <LineLabel color="skyblue">배지</LineLabel>
            <LineLabel color="yellow">배지</LineLabel>
            <LineLabel color="lightblue">배지</LineLabel>
            <LineLabel color="navy">배지</LineLabel>
            <LineLabel color="orange">배지</LineLabel>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Grade1Label>1등급</Grade1Label>
            <Grade2Label>2등급</Grade2Label>
            <Grade3Label>3등급</Grade3Label>
            <Grade4Label>4등급</Grade4Label>
            <Grade5Label>5등급</Grade5Label>
            <Grade6Label>6등급</Grade6Label>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <TextLabel htmlFor="input">레이블</TextLabel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelExamples; 