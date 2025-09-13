import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";
import B from "/b.png";
import CopyText from "../components/CopyText";


const Docs =()=>{
  return(
    <div>
     <h2 className="text-lg"> documentation will be available soon...</h2>
    </div>
  )
}

// ✅ GetStarted Page
const GetStarted = () => {
  return (
    <div>
      {/* Content Section 1 */}
      <div className="mt-16 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl space-y-4">
        <p className="text-2xl sm:text-3xl font-semibold">📦 Install Via Package Manager</p>
        <p className="text-base max-w-3xl opacity-90">
          Install Avocode-UI’s core CSS utilities and JavaScript plugins using your favorite package manager.
          Our minimal and modular structure makes it easy to integrate into any frontend project.
        </p>

        <p className="text-2xl text-cyan-300 mt-[30px]">1. Install with npm</p>
        <CopyText text="npm install avocode-ui-library" />

        <p className="text-2xl text-cyan-300 mt-[30px]">2. Add this line in your main.jsx</p>
        <CopyText text='import "avocode-ui-library/dist/assets/index-1y757Gk-.css"' />

        <img src={B} alt="main" className="rounded-xl border border-white/20 shadow-md" />
      </div>

      {/* Content Section 2 */}
      <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl space-y-4">
        <p className="text-2xl sm:text-3xl font-semibold">🌐 Include Via CDN</p>
        <p className="text-base max-w-3xl opacity-90">
          Quickly get started with Avocode-UI by including the compiled CSS directly from our CDN. 
          Explore and build responsive interfaces instantly without any setup.
        </p>

        <p className="text-2xl text-cyan-300 mt-[30px]">Use This CDN in your index.html</p>
        <CopyText text="https://cdn.jsdelivr.net/npm/avocode-ui-library@1.0.2/dist/assets/index-B053_CXX.css" />

        <img src="c.png" alt="cdn" className="rounded-xl border border-white/20 shadow-md" />
      </div>
    </div>
  );
};

// ✅ Home Page
const Home = () => {
  const navigate = useNavigate();

const goToGetStarted = () => {
  navigate("/get-started"); // navigates to GetStarted page
};

const goToDocs =()=>{
  navigate("/Docs");
}

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-screen text-center px-6">
  <h1 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    Build Stunning Interfaces
  </h1>
  <p className="mt-6 text-xl sm:text-2xl max-w-2xl opacity-80">
    Modern, modular, and lightweight UI components with AvocoderUI.
    Integrate faster. Design smarter. Ship better.
  </p>
  <div className="mt-8 flex space-x-4">
    <button   onClick={goToGetStarted} className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition">
      Get Started
    </button>
    <button onClick={ goToDocs} className="px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white/10 transition">
      Docs
    </button>
  </div>
</div>

    </div>
  );
};

// ✅ Main App
const App = () => {
  return (
    <Router>
      <div className="relative font-head min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-950 p-6 sm:p-10 text-white overflow-hidden">
        
        {/* Background Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-40 animate-pulse -z-10"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-40 animate-pulse -z-10"></div>

        {/* Navbar */}
        <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center border border-white/20 shadow-lg">
          <h1 className="text-5xl sm:text-4xl font-extrabold mb-3 sm:mb-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            🥑 AvocoderUI
          </h1>
          <ul className="flex flex-col sm:flex-row sm:space-x-6 text-base sm:text-lg font-semibold space-y-2 sm:space-y-0">
            <li className="cursor-pointer hover:text-cyan-400 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-cyan-400 transition">
              <Link to="/get-started">Get Started</Link>
            </li>
            <li className="cursor-pointer hover:text-cyan-400 transition">
              <Link to="/Docs">Docs</Link>
              </li>
          </ul>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/Docs" element={<Docs/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
