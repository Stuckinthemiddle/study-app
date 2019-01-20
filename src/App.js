import React, { Component } from 'react';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import FlashCards from './components/FlashCards';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <FlashCards/>
      </div>
    );
  }
}

export default App;
