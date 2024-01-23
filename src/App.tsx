import Card from './components/Card';

const App = () => {
  return (
    <div className="min-h-screen min-w-[280px] flex justify-center items-center bg-light-pink p-5">
      <div className="absolute top-0 left-0 w-full h-[35%] bg-mobile md:bg-desktop"></div>
      <Card></Card>
    </div>
  );
};

export default App;
