import { useSelector } from "react-redux"
import SetlistSection1 from "./section1"
import SetlistSection2 from "./section2"

const Setlist = () => {

    const { editMode, previewMode } = useSelector(state => state.control)
    const { 
        section2: editableData, 
        section1: editableSection1 
    }  = useSelector(state => state.webConfig.editedConfig.tab[1].setList)
    const { 
        section2: staticData, 
        section1: staticSection1 
    } = useSelector(state => state.webConfig.config.tab[1].setList)

    const section1Data = editMode ? editableSection1 : staticSection1
    const section2Data = editMode ? editableData : staticData
    
    return (
         <div className='pageContainer'>
            <SetlistSection1 editable={editMode} preview={previewMode} data={section1Data} />
            <SetlistSection2 editable={editMode} preview={previewMode} data={section2Data} />
         </div>
    )
}

export default Setlist