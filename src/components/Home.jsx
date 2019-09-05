import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ getCategory }) => {

    const [category, setCategory] = useState({});

    const handleChange = e => {
        const selectedOption = e.target.selectedIndex;
        setCategory({
            'id'    : e.target.value,
            'name'  : e.target[selectedOption].text
        });
    }

    const handleClick = () => {
        getCategory(category);
    }

    return (
        <div className="app-wrapper">
          <div className="container">
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center">Entype</h1>
              <h5 className="mb-5 text-center">Elige una categoría para comenzar</h5>
              <form>
                <div className="form-group">
                  <select name="category"
                          className="form-control"
                          onChange={ handleChange }>
                    <option value="0">Seleccione una categoría...</option>
                    <option value="1">El ser humano</option>
                    <option value="2">Perdido en el mundo digital</option>
                    <option value="3">Hogar, dulce hogar</option>
                  </select>
                </div>
                <Link to={ 'game/' + category.category } onClick={ handleClick } className="btn btn-block btn-primary">
                    Comenzar
                </Link>
              </form>
            </div>
          </div>
        </div>
    );
}
 
export default Home;