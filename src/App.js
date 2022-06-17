import "./App.css";
import Header from "./Header";
import About from "./About";
import Interest from "./Interest";
import Footer from "./footer";
import "./fontawesome-free-6.1.1-web/css/all.css"

const App = () => {
    return (
        <div className="AppContent">
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
    );
}
export default App;