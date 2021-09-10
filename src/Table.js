import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';

// We get data as a property of prop object from the parent
const Table = ({ data }) => {

  // Locally, we will define our state filteredData. Conceptually, this will be the "local"
  // state within our Table component. This local state can get updated by: 
  // 1. Select dropdown
  const [filteredData, setFilteredData] = useState(data);

  const tableData = useMemo(
    () => filteredData,
    [filteredData],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Role',
        accessor: 'col2',
      },
      {
        Header: 'On/Off',
        accessor: 'col3',
      },
      {
        Header: 'Status',
        accessor: 'col4',
      },
    ],
    []
  );

  // For the search input box, we'll simply leverage the useGlobalFilter hook
  // to create a text input component

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData })

  const renderHeader = () => {
    return headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th
            {...column.getHeaderProps()}
            style={{
              borderBottom: 'solid 3px red',
              background: 'aliceblue',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {column.render('Header')}
          </th>
        ))}
      </tr>
    ))
  }

  const renderRows = () => {
    return rows.map(row => {
      prepareRow(row)
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => {
            return (
              <td
                {...cell.getCellProps()}
                style={{
                  padding: '10px',
                  border: 'solid 0px gray',
                  background: 'white',
                }}
              >
                {cell.render('Cell')}
              </td>
            )
          })}
        </tr>
      )
    })
  }

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px gray' }}>
      <thead>
        {renderHeader()}
      </thead>
      <tbody {...getTableBodyProps()}>
        {renderRows()}
      </tbody>
    </table>
  )
};

export default Table;
