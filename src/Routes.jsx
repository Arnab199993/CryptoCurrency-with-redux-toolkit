import App from "./App"
import CryptoDetails from "./Components/CryptoDetails"
import CryptoCurrencies from "./Pages/CryptoCurrencies"
import Exchange from "./Pages/Exchange"
import Home from "./Pages/Home"
import News from "./Pages/News"

const Routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "cryptoccurrencies",
        element: <CryptoCurrencies />
    },
    {
        path: "exchange",
        element: <Exchange />
    },
    {
        path: "news",
        element: <News />
    },
    {
        path: "crypto/:coinId",
        element: <CryptoDetails />
    },

]
export default Routes