import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Cardgrid from "./components/cardgrid";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center  h-screen gap-4">
        <Hero />
        <Cardgrid />
      </div>
    </>
  );
}

export default App;
