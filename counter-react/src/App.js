import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import MouseContaniner from './components/MouseContaniner';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectHookCounterOne from './components/UseEffectHookCounterOne';
import HookCounterFour from './components/HookCounterFour';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <UseEffectHookCounterOne />
      <ClassMouse />
      <HookMouse />
      <MouseContaniner />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />

    </div>
  );
}

export default App;
