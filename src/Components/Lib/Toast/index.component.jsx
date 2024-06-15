
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '../../../Redux/Slices/control.slice';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toast = () => {

    const dispatch = useDispatch();
    const {message, type, time, active } = useSelector((state) => state.control.toast)
    const toastClasses = `toast ${active ? 'show' : ''} ${type}`;

    useEffect(() => {
        if (active) {
          const timeout = setTimeout(() => {
            dispatch(hideToast());
          }, time);
    
          return () => clearTimeout(timeout);
        }
      }, [dispatch, active]);

      const handleIcon = () => {
        switch (type) {
            case 'success':
                return icon({name: 'circle-check', style: 'regular'})
            case 'warning':
                return icon({name: 'triangle-exclamation', style: 'solid'})
            case 'error':
                return icon({name: 'circle-xmark', style: 'regular'})
            case 'info':
                return icon({name: 'circle-info', style: 'solid'})
        }
      }

    return(
        <div className={toastClasses}>
            <div className='toast--container'>
                <div className='toast--icon'>
                    <FontAwesomeIcon 
                        style={{paddingRight: 10}} 
                        color='#FFFFFF'  
                        size="lg"
                        icon={handleIcon()} 
                    />
                </div>
                <div className='toast--textContainer'>
                    <div className='toast--title'>{message.title}</div>
                    <div className='toast--text'>{message.text}</div>
                </div>
            </div>
        </div>
    )
}

export default Toast