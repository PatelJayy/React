import "./App.css";
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md   ">
        vite with tailwind
      </h1>
      <Card username='Jay' post='staff engineear' />
      <Card post='CEO' img='https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg' />
      <Card username='Patel'  />
    </>
  );
}

export default App;
