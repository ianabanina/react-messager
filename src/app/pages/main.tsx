import React from 'react'
import ReactDOM from 'react-dom/client'
import 'app/assets/styles/index.scss'
import App from "app/pages/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
