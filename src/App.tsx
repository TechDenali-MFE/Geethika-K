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
  const handleDecrease=()=>{
    const event= new CustomEvent("decrease-counter",{
      detail:{
        value:2,
      },
    });
    window.dispatchEvent(event);
  }
  return (
    <>
      This is My Widget {options.name}
        <button onClick={handleIncrease}>
        Increase Counter
      </button>
      <button onClick={handleDecrease}>
        Decrease Counter
      </button>
    </>
  )
};

export default App;