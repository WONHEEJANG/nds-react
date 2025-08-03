import React from 'react';
import Bullet, { BulletBody, BulletCaption, BulletNotice, Bullet2Depth } from '../Bullet';

const BulletExamples = ({ bulletItems, bullet2DepthItems }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Bullet Components</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3>1depth Bullet</h3>
          <BulletBody items={bulletItems} />
        </div>
        <div>
          <h3>2depth Bullet</h3>
          <Bullet2Depth items={bullet2DepthItems} />
        </div>
        <div>
          <h3>Caption Bullet</h3>
          <BulletCaption items={bulletItems} />
        </div>
        <div>
          <h3>Notice Bullet</h3>
          <BulletNotice items={bulletItems} />
        </div>
      </div>
    </div>
  );
};

export default BulletExamples; 