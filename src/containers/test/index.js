import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Local Styles
import './styles.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'

const ACTIVE = {
  color: 'rgba(0,0,0,0.8)',
  textDecoration:'underline',
}

export default class Test extends Component{
    render(){
        return(
          <div id="page">

            <header className="side-navigation-container">
                <div className="site-links">

                  <div className="branding">
                    <span className="branding-name">John Manhart</span>
                    <span className="branding-title">User Experince</span>
                  </div>

                  <div className="internal-links">
                    <ul>
                      <Link activeStyle={ACTIVE} to="/test/about">
                        <li>About</li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/test/home">
                        <li>Work</li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/test/marlin">
                        <li>Blog</li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/test/favorites">
                        <li>Likes</li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/test/coffee">
                        <li>Coffee</li>
                      </Link>
                    </ul>
                  </div>

                  <div className="external-links">
                    <i className="fa fa-dribbble fa-1x"/>
                    <i className="fa fa-github fa-1x"/>
                    <i className="fa fa-instagram fa-1x"/>
                  </div>


                  </div>
            </header>

            <div className="main-content">
              {this.props.children}
            </div>

          </div>

        )
    }
}