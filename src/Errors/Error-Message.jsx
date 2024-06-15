import Typography from '@mui/material/Typography';

const ErrorsJSX = (error) => {
    return (
        <>
        <h1>Error</h1>
          Code: {error.code}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Message : {error.message}
                </Typography>
        </>
    )
}

export default ErrorsJSX