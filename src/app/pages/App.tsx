import {Provider} from "react-redux";
import {store} from "app/store";
import {Router} from "app/pages/Router.tsx";

function App() {
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}

export default App
