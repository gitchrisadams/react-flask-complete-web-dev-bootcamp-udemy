import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

// Thi is the old api key when we directly used the api from unsplash
// const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const deleteImageHandler = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // This is the old api fetch directly from unsplash, left for reference
    // fetch(
    //   `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${UNSPLASH_KEY}`,
    // )
    fetch(`${API_URL}/new-image?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: searchTerm }, ...images]);
      })
      .catch((err) => console.log(err));

    // Clear Search Form
    setSearchTerm('');
  };

  return (
    <div>
      <Header title="Image Gallery" />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchSubmit={handleSearchSubmit}
      />

      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard
                image={image}
                deleteImageHandler={deleteImageHandler}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
