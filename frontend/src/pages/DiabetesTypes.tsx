import React from 'react';
import { Users, Baby, Heart, Zap, AlertCircle, Activity, Clock, Target } from 'lucide-react';

const DiabetesTypes = () => {
  const diabetesTypes = [
    {
      id: 'type1',
      title: 'Type 1 Diabetes',
      icon: Zap,
      prevalence: '5-10%',
      onset: 'Usually childhood/adolescence',
      cause: 'Autoimmune destruction of beta cells',
      color: 'red',
      characteristics: [
        'Absolute insulin deficiency',
        'Rapid onset of symptoms',
        'Requires insulin therapy',
        'Often diagnosed in youth',
        'Strong genetic component'
      ],
      symptoms: [
        'Rapid weight loss',
        'Extreme fatigue',
        'Frequent urination',
        'Excessive thirst',
        'Diabetic ketoacidosis (DKA)'
      ],
      treatment: [
        'Insulin injections (multiple daily)',
        'Continuous glucose monitoring',
        'Carbohydrate counting',
        'Regular blood sugar testing',
        'Lifestyle management'
      ]
    },
    