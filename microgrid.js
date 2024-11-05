import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Sun, Cloud, Home } from 'lucide-react';

const EnergyDashboard = () => {
  // Simulated data for a 24-hour period
  const [data] = useState([
    { time: '00:00', solarGeneration: 0, prediction: 0, temperature: 15, cloudCover: 0 },
    { time: '04:00', solarGeneration: 0, prediction: 0, temperature: 14, cloudCover: 0 },
    { time: '08:00', solarGeneration: 2.5, prediction: 2.7, temperature: 18, cloudCover: 20 },
    { time: '12:00', solarGeneration: 5.0, prediction: 4.8, temperature: 25, cloudCover: 15 },
    { time: '16:00', solarGeneration: 3.5, prediction: 3.3, temperature: 23, cloudCover: 30 },
    { time: '20:00', solarGeneration: 0.2, prediction: 0.3, temperature: 19, cloudCover: 0 },
    { time: '24:00', solarGeneration: 0, prediction: 0, temperature: 16, cloudCover: 0 },
  ]);

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Connected Houses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-gray-500">Active in Microgrid</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Current Generation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.5 kW</div>
            <div className="text-sm text-gray-500">From Solar Panels</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Weather Condition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23°C</div>
            <div className="text-sm text-gray-500">Partly Cloudy</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>24-Hour Solar Generation Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="solarGeneration" 
                  stroke="#8884d8" 
                  name="Actual Generation" 
                />
                <Line 
                  type="monotone" 
                  dataKey="prediction" 
                  stroke="#82ca9d" 
                  name="Predicted Generation"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnergyDashboard;
