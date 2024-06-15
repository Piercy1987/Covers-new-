import Button from '../Lib/Button/Button.component';
import { setLandingPageConfig } from '../../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { setPreviewMode, setToast } from '../../Redux/Slices/control.slice';

const SaveBar = () => {

    const dispatch = useDispatch()
    const { previewMode, editMode } = useSelector(state => state.control)
    const user = useSelector(state => state.users)
    const data = useSelector(state => state.webConfig.editedConfig)

    const handleSave = async () => {

        

        try {
           const saved = await setLandingPageConfig(user, data)
           if (saved.success) {
            dispatch(setToast({
                active: true,
                message: {
                    title: 'Success',
                    text: 'Document saved successfully'
                },
                type: 'success',
                time: 5000
            }))
           }
        } catch (error) {
            dispatch(setToast({
                active: true,
                message: {
                    title: 'Error',
                    text: 'There was an issue saving your document'
                },
                type: 'error',
                time: 5000
            }))
        }
    }

    const handlePreview = () => {
        dispatch(setPreviewMode())
        if (editMode && !previewMode) {
            dispatch(setToast({
                active: true,
                message: {
                    title: 'Preview Mode',
                    text: 'Viewing in preview mode'
                },
                type: 'info',
                time: 5000
            }))
        } else {
            dispatch(setToast({
                active: true,
                message: {
                    title: 'Edit Mode',
                    text: 'Viewing in edit mode'
                },
                type: 'info',
                time: 5000
            }))
        }
    }

    return (
        <div className="saveBarContainer" id="saveBar">
            <div className="draggableHandle" id="draggableHandle"></div>
            <div className='saveBarContainer'>
                <div className='saveBar__paragraph'>
                    <p>You are signed in as an administrator, you have the options to make changes and preview them, when you have completed all your changes, please save them using the save buton to the right.</p>
                </div>
                <div className='buttonContainer'>
                    <Button
                        style={{ marginRight: 5 }}
                        onClick={handlePreview}
                    ><div>{previewMode ? 'Edit' : "Preview"}
                            <FontAwesomeIcon
                                style={{ marginLeft: 8 }}
                                size="small"
                                icon={previewMode ? icon({ name: 'eye', style: 'regular' }) : icon({ name: 'eye-slash', style: 'regular' })}
                            />
                        </div>
                    </Button>
                    <Button
                        inverted
                        onClick={handleSave}
                    ><div>Save
                            <FontAwesomeIcon
                                style={{ marginLeft: 8 }}
                                size="small"
                                icon={icon({ name: 'floppy-disk', style: 'regular' })}
                            />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SaveBar