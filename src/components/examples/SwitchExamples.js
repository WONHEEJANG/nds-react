import React from 'react';
import Switch, { BasicSwitch, BigFontSwitch, LargeSwitch, SmallSwitch, ExtraSmallSwitch, OnSwitch, OffSwitch } from '../Switch';

const SwitchExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Switch Components</h2>
      
      {/* Basic Switch - Size=lg */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Switch - Size=lg</h3>
        
        {/* State=false */}
        <div className="component-section">
          <h4>State=false</h4>
          <LargeSwitch 
            checked={false}
            onChange={(checked) => console.log('Large switch changed:', checked)}
          />
        </div>

        {/* State=true */}
        <div className="component-section">
          <h4>State=true</h4>
          <LargeSwitch 
            checked={true}
            onChange={(checked) => console.log('Large switch changed:', checked)}
          />
        </div>
      </div>

      {/* Basic Switch - Size=sm */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Switch - Size=sm</h3>
        
        {/* State=false */}
        <div className="component-section">
          <h4>State=false</h4>
          <SmallSwitch 
            checked={false}
            onChange={(checked) => console.log('Small switch changed:', checked)}
          />
        </div>

        {/* State=true */}
        <div className="component-section">
          <h4>State=true</h4>
          <SmallSwitch 
            checked={true}
            onChange={(checked) => console.log('Small switch changed:', checked)}
          />
        </div>
      </div>

      {/* Basic Switch - Size=xs */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Switch - Size=xs</h3>
        
        {/* State=false */}
        <div className="component-section">
          <h4>State=false</h4>
          <ExtraSmallSwitch 
            checked={false}
            onChange={(checked) => console.log('Extra small switch changed:', checked)}
          />
        </div>

        {/* State=true */}
        <div className="component-section">
          <h4>State=true</h4>
          <ExtraSmallSwitch 
            checked={true}
            onChange={(checked) => console.log('Extra small switch changed:', checked)}
          />
        </div>
      </div>

      {/* Big Font Switch */}
      <div className="component-section">
        <h3 className="component-subtitle">Big Font Switch</h3>
        
        {/* State=false */}
        <div className="component-section">
          <h4>State=false</h4>
          <BigFontSwitch 
            checked={false}
            onChange={(checked) => console.log('Big font switch changed:', checked)}
          />
        </div>

        {/* State=true */}
        <div className="component-section">
          <h4>State=true</h4>
          <BigFontSwitch 
            checked={true}
            onChange={(checked) => console.log('Big font switch changed:', checked)}
          />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <BasicSwitch 
              onChange={(checked) => console.log('Switch changed:', checked)}
            />
            <BasicSwitch 
              checked={true}
              onChange={(checked) => console.log('Switch changed:', checked)}
            />
            <BasicSwitch 
              disabled={true}
              onChange={(checked) => console.log('Switch changed:', checked)}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <LargeSwitch 
              onChange={(checked) => console.log('Large switch changed:', checked)}
            />
            <LargeSwitch 
              checked={true}
              onChange={(checked) => console.log('Large switch changed:', checked)}
            />
            <SmallSwitch 
              onChange={(checked) => console.log('Small switch changed:', checked)}
            />
            <SmallSwitch 
              checked={true}
              onChange={(checked) => console.log('Small switch changed:', checked)}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <BigFontSwitch 
              onChange={(checked) => console.log('Big font switch changed:', checked)}
            />
            <BigFontSwitch 
              checked={true}
              onChange={(checked) => console.log('Big font switch changed:', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExamples;