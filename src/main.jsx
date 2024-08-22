import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';



const theme = {
  "token": {
    "colorSuccess": "#52c41a",
    "colorError": "#f5222d",
    "colorLink": "#1677ff",
    "colorTextBase": "#000000",
    "fontSize": 16,
    "colorWarning": "#faad14",
    "colorPrimary": "#1677ff",
    "colorInfo": "#1677ff"
  }
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
