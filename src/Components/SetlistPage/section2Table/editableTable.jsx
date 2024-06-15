import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSetlistRow, newSetlist, deleteRow } from "../../../Redux/Slices/config.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { v4 as uuidv4 } from 'uuid';


const EditableTable = ({
    data,
    editable
}) => {

    const dispatch = useDispatch()
    const { tableRowData } = data

    const handleAddRow = () => {
        dispatch(newSetlist({
            id: uuidv4(),
            artist: "",
            song: "",
        }))
    };

    const handleDelete = (id) => {
        dispatch(deleteRow(id));
    }

    const handleInputChange = (e, id, field) => dispatch(editSetlistRow({ value: e.target.value, id, field }))

    return (
        <div className="section2Container">
            <div className="tableContainer">
                <table className="table">
                    <thead className="tableHead">
                        <tr className="tableRow">
                            <td className="tableData tableData__head">Artist</td>
                            <td className="tableData tableData__head">Song</td>
                            <td className="tableData tableData__head">Delete</td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {tableRowData.map((row) => (
                            <tr className="tableRow tableRow__body" id={row.id} key={row.id}>
                                <td className="tableData tableData__body">
                                    <input
                                        className="tableInput"
                                        value={row.artist}
                                        onChange={(e) => handleInputChange(e, row.id, "artist")}
                                    />
                                </td>
                                <td className="tableData tableData__body">
                                    <input
                                        className="tableInput"
                                        value={row.song}
                                        onChange={(e) => handleInputChange(e, row.id, "song")}
                                    />
                                </td>
                                <td className="tableData tableData__body">
                                    <div
                                        className='tableData--delete'
                                        onClick={() => handleDelete(row.id)}
                                    >
                                        <FontAwesomeIcon
                                            style={{  }}
                                            color='#fc0303'
                                            size="small"
                                            icon={icon({ name: 'trash', style: 'solid' })}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="addRowButton" onClick={handleAddRow}>
                    +
                </button>
            </div>
        </div>
    );
};

export default EditableTable;
