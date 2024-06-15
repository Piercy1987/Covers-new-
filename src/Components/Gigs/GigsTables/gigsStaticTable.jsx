
const GigsStaticTable = ({data}) => {

    return(
        <>
            <div className="gigsStaticTable__container">
                <table className="gigsStaticTable__table">
                    <thead>
                        <tr className="gigsStaticTable__tableRow">
                            <th className="tableHeadData">Date</th>
                            <th className="tableHeadData">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length && data.map((row) => (
                                <tr className="gigsStaticTable__tableRow">
                                    <td className="tableRowData">
                                        {row.date}
                                    </td>
                                    <td className="tableRowData">
                                        {row.location}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GigsStaticTable