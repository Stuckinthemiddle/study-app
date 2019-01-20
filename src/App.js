import React, { Component } from 'react';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NoteList />
      </div>
    );
  }
}

export default App;
