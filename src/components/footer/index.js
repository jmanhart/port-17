import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import './../../styles/styles.css';
import './styles.scss'

export default class Footer extends Component{
    render(){
        return(
            <div>
              <div className="social-block">
                <Link to="/resume"><span className="label-footer-02 roll-over">Timeline</span></Link>
                <a href="https://github.com/jmanhart"><span className="label-footer">Github</span></a>
                <a href="https://dribbble.com/manhart"><span className="label-footer">Dribbble</span></a>
                <a href="https://medium.com/@JohnManhart"><span className="label-footer">Medium</span></a>
              </div>
            </div>
        )
    }
}
