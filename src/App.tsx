import { WidgetOptions } from "./index.widget";


interface AppProps {
  options?: WidgetOptions;
}

const App: React.FC<AppProps> = ({ options }: any) => {
  console.log(options);

  const handleIncrease = () => {
    const event = new CustomEvent("increase-counter", {
      detail: {
        value: 2,
      },
    });

    window.dispatchEvent(event);
  };
  // const handleDecrease=()=>{
  //   const event= new CustomEvent("decrease-counter",{
  //     detail:{
  //       value:2,
  //     },
  //   });
  //   window.dispatchEvent(event);
  // }
  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        This is My Widget
      </h2>

      <button
        onClick={handleIncrease}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Increase Counter
      </button>
    </div>
    </>
  )
};

export default App;