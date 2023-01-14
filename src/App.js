import ErrorBoundaryIndex from './Components/ErrorBoundaries/Index';
import TokensDetails from './Components/Tokens/TokensDetails';

function App() {
  return (
    <>
      <ErrorBoundaryIndex>
        <TokensDetails/>
      </ErrorBoundaryIndex>
    </>
  );
}

export default App;
