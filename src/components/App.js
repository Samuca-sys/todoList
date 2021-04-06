import Content from "./Content";
import StateProvider from "./StateProvider";

export default function App() {
    return (
      <div className="container">
        <div className="content">
          <StateProvider>
            <Content />
          </StateProvider>
        </div>
      </div>  
    );
  }
