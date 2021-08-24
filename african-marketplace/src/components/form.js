import React from 'react';

export default function Form(){

//the js so that the add items form can communicate with frontend and the backend, and that the buttons can work should be here
    return (
       //need the nav bar on top. Adam is working on that
       <div className="form-container">
           <h1>Add Items</h1>
        <form id="add-items">  
            <div className="item-name">
                <label>
                    Name of Item: 
                    <input id='item' type='text' name='create-item' placeholder='Name of Item'></input>
                </label>
            </div>
                
            <div> 
            <label>
                    Price of Item:
                    <input id='price' type='text' name='item-price' placeholder='Price of Item'></input>
                </label>
            </div>

            <div className="item-name">
                <label>
                    Description: 
                    <input id='description' type='text' name='item-description' placeholder='Add description'></input>
                </label>
            </div>

            <div className="item-name">
                <select name="location" id="location-dropdown"> 
                    <option> Select Location</option>
                    <option> COUNTRIES FROM AFRICA</option> 
                    {/* i dont know the countries in africa so let me know and ill change this */}
                </select>
            </div>

            <div className="submit-img"> 
                <label>
                    Add image (Optional):
                    <input id='img' type='file' name='img'></input>
                </label>
            </div>
            <button className="submit-btn"> Publish </button>
            


        </form>

        </div>
    )
}