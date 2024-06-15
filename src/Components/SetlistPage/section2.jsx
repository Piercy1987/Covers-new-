import EditableTable from "./section2Table/editableTable"
import StaticTable from "./section2Table/staticTable"

const SetlistSection2 = ({ editable, data, preview }) => {

    return (
        <>
            {
            editable && !preview ? 
            <EditableTable data={data} editable={editable} /> 
            : 
            <StaticTable data={data} />
            }
        </>
    )
}

export default SetlistSection2