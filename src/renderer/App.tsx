import * as React from 'react';
import { IpcRenderer } from 'electron';

import './App.less';
import SliceReduser from './redux/RenderExample'

interface IElectronAPI {
  ipcRenderer: IpcRenderer,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}


let first = true
const App = () => {
  if (first) {
    first = false
    const ipc = window.electronAPI.ipcRenderer
    ipc.invoke('ipc_something').then((something: string) => {
      console.log('renderer something', something)
    })
  }

  return (
    <SliceReduser></SliceReduser>
  );
};

export default App;
