import React, { Component } from 'react';
import {searchbar} from './searchbar';
import {newcourt} from './new';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const View = () => {
    return(
        <Router>
        <div>
            <div>
                <nav>
                    <Link to="/search">Search a Basketball Court</Link>
                </nav>
                <div>
                    <Route path="/search" component={searchbar} />
                </div>
            </div>

            <div>
                <nav>
                    <Link to="/new">Add a New Court</Link>
                </nav>
                <div>
                    <Route path="/new" component={newcourt} />
                </div>
            </div>
        </div>
        </Router>
    )
};

