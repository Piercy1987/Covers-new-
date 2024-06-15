import { useSelector } from "react-redux"
import GigsStaticTable from "./GigsTables/gigsStaticTable"
import EditableGigsTable from "./GigsTables/editableGigsTable.compnent"


const Gigs = ({}) => {

    const {editMode, previewMode} = useSelector(state => state.control)

    return (
        <div className="pageContainer">
            {editMode && !previewMode? 
                <EditableGigsTable data={[{date: '02/09/1987', location: 'Torbay Social Club'}]} /> 
                :
                <GigsStaticTable data={[{date: '02/09/1987', location: 'Torbay Social Club'}]} />
            }
        </div>
    )
}

export default Gigs