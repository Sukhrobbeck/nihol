import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './tools/wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      <h1>Nihol Delta Vercel App</h1>
    </div>
  </Wrapper>
);

