import React from 'react';
import { DataType } from './DataType';

export const ContentContext = React.createContext<DataType | null>(null);
