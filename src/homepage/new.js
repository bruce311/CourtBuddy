import React, { Component } from 'react';

export const newcourt = () => {
    return ( 
    <div>
        <form>
            <div className = "form-style">
                <input className="form-input" type="text" name="location" placeholder="Enter location"/>
            </div>

            <div className = "form-style">
                <input className="form-input" type="text" name="search" placeholder="Paste Image URL"/>
            </div>

            <div>
                <button>Create</button>
            </div>
        </form>
    </div>)
  };