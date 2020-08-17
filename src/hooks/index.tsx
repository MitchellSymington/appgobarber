/**
 * Criado para reuniar as api de contexto dentro de um arquivo so
 */

import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
