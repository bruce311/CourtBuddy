import React, { Component } from 'react';
import Courtslist from './searchbar';
import Newcourt from './new';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const View = () => {
    return(
        <Router>
        <div>
            <div className = "search-bar"> 
                <button>
                    <Link to="/search">Find a Basketball Court</Link>
                </button>
                <div>
                    <Route path="/search" component={Courtslist}/>
                </div>
            </div>

            <div className = "new_court">
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

