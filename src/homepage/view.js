import React, { Component } from 'react';
import Courtslist from './searchbar';
import Newcourt from './new';
import './homepage.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const View = () => {
    return(
        <Router>
        <div>
            <div> 
                <button>
                    <Link to="/search">Find a Basketball Court</Link>
                </button>
                <div>
                    <Route path="/search" component={Courtslist}/>
                </div>
            </div>

            <div>
                <button>
                    <Link to="/new">Add a New Court</Link>
                </button>
                <div>
                    <Route path="/new" component={Newcourt} />
                </div>
            </div>
        </div>
        </Router>
    )
};

