import React from 'react';
import './form.css'

export default function Form(){

//the js so that the add items form can communicate with frontend and the backend, and that the buttons can work should be here
    return (
       //need the nav bar on top. 
       <div className="form-container">
          
           <h1>Add Items</h1>

        <form> 
            <h2> Item Information</h2>
            <div className="main-container">
                
                <div className="item-name">
                    <input id='item' type='text' name='create-item' placeholder='Name of Item'></input>
                </div>
                    
                <div className="item-price"> 
                    <input id='price' type='text' name='item-price' placeholder='Price of Item'></input>
                </div>

                <div className="item-name">
                    <input id='description' type='text' name='item-description' placeholder='Add description'></input>
                </div>

                <div className="item-name">
                    <select className="location" id="location-dropdown"> 
                        <option> Select Location</option>
                        <option> COUNTRIES FROM AFRICA</option> 
                        {/* i dont know the countries in africa so let me know and ill change this */}
                    </select>
                </div>

                <div className="img"> 
                    <label>
                        Add image (Optional):
                        <input id='img' type='file' name='img'></input>
                    </label>
                </div>
                <button className="submit-btn"> Publish </button>
            </div>


        </form>

        </div>
    )
}