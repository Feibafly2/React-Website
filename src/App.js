import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Little Lemon - Reserve a Table</title>
        <meta name="description" content="Experience the finest dining at Little Lemon. Reserve a table for an unforgettable culinary experience." />
        <meta property="og:title" content="Little Lemon - Reserve a Table" />
        <meta property="og:description" content="Experience the finest dining at Little Lemon. Reserve a table for an unforgettable culinary experience." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/reserve-a-table" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Little Lemon" />
      </Helmet>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
