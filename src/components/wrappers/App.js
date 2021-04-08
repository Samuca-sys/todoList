import Content from "./Content";
import KeyStrokeHandler from "./KeyStrokeHandler";
import StateProvider from "./StateProvider";

export default function App() {
  return (
    <div className="container">
      <div className="content">
        <StateProvider>
          <KeyStrokeHandler>
            <Content />
          </KeyStrokeHandler>
        </StateProvider>
      </div>
    </div>
  );
}
