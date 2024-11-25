import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* You can add a footer component here if you have one */}
      <Footer />
    </div>
  );
}

export default App;