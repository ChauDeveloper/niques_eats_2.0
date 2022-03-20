import React from "react";
import Dish from "../components/Dish-card";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Col,
	Row,
} from "reactstrap";
import "../styles/brunch-menu.css";


import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';



const MenuBrunch = () => {
	return (
		<div>


<div id="title">
    <span>MENU </span>
</div>

<div id="menu-tabs">
    <Row>
        <Col sm="6">
            <h3 id="active-tab">BRUNCH</h3>
        </Col>
        <Col sm="6">
            <a href="/menu/dinner">
                <h3 id="not-active-tab">DINNER</h3>
            </a>
        </Col>
    </Row>
</div>

<div id="brunch-background">
    <div id="brunch">
        <div id="nav-buttons-container" className="container">
           <CategoryMenu />
        </div>

        <div id="brunch-dishes">
           
            
        </div>
    </div>

    <div id="scroll-to-top" className="footer">
        <a href="#title">
            {" "}
            <h4>Scroll To Top ^</h4>{" "}
        </a>
    </div>
</div>


</div>
	);
};

export default MenuBrunch;
