import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { resetErrors } from '../Redux/Slices/Error.slice';
import ErrorsJSX from './Error-Message';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ErrorWrapper = ({ children }) => {
    
    const [open, setOpen] = React.useState(false)
    const { errors } = useSelector(state => state.error)
    const dispatch = useDispatch()

    React.useEffect(() => {
        errors.length && setOpen(true)
    }, [errors])

    const handleClose = () => {
        setOpen(false)
        dispatch(resetErrors())
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                      {errors.map((error) => ErrorsJSX(error))}
                </Box>
            </ Modal>
            {children}
        </>
    )
}

export default (ErrorWrapper)