import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Finances = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mb-2">
            <div className="row">
                <div className="breadcrumb">Your Finances</div>
            </div>
            <div className="row">
                <form>
                    <label for="start">Month</label>

                    <input type="month" id="month" name="month" />
                    <label for="cars">Choose a Category:</label>

                    <select name="category" id="category">
                        <option value="home">Home</option>
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="services">Services</option>
                        <option value="education">Education</option>
                        <option value="clothing">Clothing</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <button type="submit">Show me my money!</button>
                </form>
                <div className="breadcrumb">Dataviz graph</div>
            </div>
            <div className="posicionFooter" />
        </div>
    );
};
