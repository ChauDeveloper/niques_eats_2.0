import React from 'react';
import Dish from '../components/Dish-card';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row,
} from 'reactstrap';
import "../styles/dinner-menu.css"

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';


const MenuDinner = () => {


    return (
<div>
			<div className="container">
				<CategoryMenu />
				<ProductList />
				<Cart />
				</div>
		</div>
    );
  };  
  
  export default MenuDinner;