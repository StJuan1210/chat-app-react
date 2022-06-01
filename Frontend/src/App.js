import { ChatProvider } from "./context/ChatContext";
import { useState } from 'react'
import Container from "./components/Container";
import Footer from "./components/reusables/Footer";
import Header from "./components/reusables/Header";

function App() {
  return (
    <div>
      <Header/>
      <div className="artboard-demo">
      <div className="artboard">
        <ChatProvider>
          <Container/>
        </ChatProvider>
      </div>
      </div>

      <Footer/>

  </div>
  )
}

export default App;
