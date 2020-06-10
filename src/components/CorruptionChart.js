import { VictoryChart, VictoryBar } from 'victory';
import React, { useState, useEffect } from 'react';

export default function CorruptionChart({}) {
  return (
    <div>
      <VictoryChart domainPadding={20} width={200} height={200}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          // data={sampleData}
        />
      </VictoryChart>
    </div>
  );
}
