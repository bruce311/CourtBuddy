import React, { Component } from 'react';

export const searchbar = () => {
    return ( 
    <div>
        <form>
            <div>
                <input className="search-input" type="text" name="search" placeholder="Enter location"/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    </div>)
  };
  


