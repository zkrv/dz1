import logo from './logo.svg';
import './App.css';


function Header() {
    return (
        <>
        <h1>For head</h1>
            <Title />
        </>
    )
}
function Content() {
    return (
        <>
        <h3>For content</h3>
            <Title />
        </>
    )
}
function Footer() {
    return (
        <>
        <p>For footer</p>
            <Title />
        </>
    )
}
function Title(){
    return (
        <p>For title</p>
    )
}
function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />

        </div>
    );
}

export default App;
