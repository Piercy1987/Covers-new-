import { useDispatch } from "react-redux"
import { setSetlistSection1HeaderText } from "../../Redux/Slices/config.slice"


const SetlistSection1 = ({
    data,
    editable,
    preview
}) => {

    const dispatch = useDispatch()
    const handleUpdate = (e) => {
        dispatch(setSetlistSection1HeaderText(e.target.value))
    }

    return (
        <div className='setlistSection1__container'>
             {
                editable && !preview ? 
                <>
                    <textarea 
                        rows='8'
                        className="textArea setlistSection1__headerText"
                        onChange={handleUpdate}
                    >
                        {data.headerText}
                    </textarea>
                </> 
                :
                <>
                    <div className='setlistSection1__staticText'>
                        {data.headerText}
                    </div>
                </>
             }
        </div>
    )
}

export default SetlistSection1