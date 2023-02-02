'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

// redux 이용하기 위해 필요
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
