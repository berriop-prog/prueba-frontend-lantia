import React from 'react';
import { ReactComponent as DoubleArrowLeft } from '../../assets/double-left-arrows-angles.svg';
import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
import { ReactComponent as DoubleArrowRight } from '../../assets/angle.svg';
import './Footer.css'

function Footer({ goToStart, goToEnd, goToNext, goToPrevious, current }) {
  return (
    <footer className="footer">
      <div className="footer-left"></div>
      <div className="footer-selector">
        <div className="selector-buttons">
            <DoubleArrowLeft className="selector-arrow" onClick={() => goToStart()} />
            <ArrowLeft className="selector-arrow" onClick={() => goToPrevious()} />
            <Home className="selector-arrow" onClick={() => goToStart()} />
            <ArrowRight className="selector-arrow" onClick={() => goToNext()} />
            <DoubleArrowRight className="selector-arrow" onClick={() => goToEnd()} />
        </div>
        <div className="selector-indicator">0{current}/04</div>
      </div>
      <div className="footer-right"></div>   
    </footer>
  );
}
export default Footer;