import { WidgetOptions } from "./index.widget";


interface AppProps {
  options?: WidgetOptions;
}

const App: React.FC<AppProps> = ({ options }: any) => {

  return (
    <>
      This is My Widget {options.name}
    </>
  )
};

export default App;