

const StaticTable = ({data}) => {

    const { tableRowData } = data

    return (
        <>
            <div className="section2Container">
                <div className="tableContainer">
                    <table className="table">
                        <thead className="tableHead">
                            <tr className="tableRow">
                                <td className="tableData tableData__head">Artist</td>
                                <td className="tableData tableData__head">Song</td>
                            </tr>
                        </thead>
                        <tbody className="tableBody">
                            {tableRowData.map((row) => ( row.artist !== '' &&
                                <tr className="tableRow tableRow__body" id={row.id} key={row.id}>
                                    <td className="tableData tableData__body">
                                        {row.artist}
                                    </td>
                                    <td className="tableData tableData__body">
                                        {row.song}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StaticTable




