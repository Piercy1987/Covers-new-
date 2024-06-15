import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const EditableGigsTable = ({ data = [{ date: '', location: '' }] }) => {

    const handleDelete = () => {

    }

    const handleInputChange = () => {

    }

    const handleAddRow = () => {

    }

    return (
        <div>
            <div className="gigsStaticTable__container">
                <table className="gigsStaticTable__table">
                    <thead>
                        <tr className="gigsStaticTable__tableRow">
                            <th className="tableHeadData">Date</th>
                            <th className="tableHeadData">Location</th>
                            <td className="tableHeadData">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length && data.map((row) => (
                                <tr className="gigsStaticTable__tableRow">
                                    <td className="tableRowData">
                                        <input
                                            className="tableInput"
                                            value={row.date}
                                            onChange={(e) => handleInputChange(e, row.id, "artist")}
                                        />
                                    </td>
                                    <td className="tableRowData">
                                        <input
                                            className="tableInput"
                                            value={row.location}
                                            onChange={(e) => handleInputChange(e, row.id, "song")}
                                        />
                                    </td>
                                    <td className="tableRowData">
                                        <div
                                            className='tableData--delete'
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            <FontAwesomeIcon
                                                style={{}}
                                                color='#fc0303'
                                                size="small"
                                                icon={icon({ name: 'trash', style: 'solid' })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className="addRowButton" onClick={handleAddRow}>
                    +
                </button>
            </div>
            
        </div>
    )
}

export default EditableGigsTable