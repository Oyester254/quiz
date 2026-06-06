import Quiz from "./components/quiz";
function App() {
  return (
    <div className="m-0 p-0 font-sans bg-gradient-to-br from-slate-500 via-slate-600 to-indigo-800 text-slate-100 min-h-screen flex items-start justify-center">
      <div className="w-full max-w-xl m-4 bg-white text-black text-center p-8 rounded-lg shadow-lg md: m-10 ">
        <h1 className="font-bold mb-[20px]">Skill Check</h1>
        <Quiz />
      </div>
    </div>
  );
}
export default App;
