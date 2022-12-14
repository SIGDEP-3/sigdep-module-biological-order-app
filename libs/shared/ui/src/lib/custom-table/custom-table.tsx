/* eslint-disable-next-line */
import {
  Button,
  Card,
  Grid,
  Group,
  Select,
  Table,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import {
  Cell,
  HeaderGroup,
  Row,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
// import GlobalFilter from './GlobalFilter';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconSortAscending,
  IconSortDescending,
} from '@tabler/icons';

type CustomTableProps = {
  data: any[];
  columns: any;
  initialState?: any;
  tableHooks?: any;
  controlledPageCount?: number;
  searchable?: boolean;
  color?: string;
  striped?: boolean;
  pagination?: boolean;
  bordered?: boolean;
  form?: JSX.Element;
  hiddenHeader?: boolean;
  totalPrice?: number;
  showTotal?: boolean;
  totalColumn?: number;
};

export const CustomTable = ({
  data,
  columns,
  initialState,
  tableHooks,
  searchable,
  color,
  striped,
  pagination,
  bordered,
  form,
  hiddenHeader,
  totalPrice,
  showTotal,
  totalColumn,
}: CustomTableProps) => {
  const theme = useMantineTheme();

  const customColor = color ? theme.colors[color] : undefined;

  const isEven = (idx: number) => idx % 2 === 0;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // preGlobalFilteredRows,
    // setGlobalFilter,
    state: {
      pageIndex,
      pageSize,
      // globalFilter
    },
  } = useTable(
    {
      columns,
      data,
      initialState,
      // manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      // pageCount: controlledPageCount ? controlledPageCount : 5,
    },
    tableHooks ? tableHooks : () => {},
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const createTd = (quantity: number): JSX.Element[] => {
    const length: number[] = [];
    for (let i = 1; i < quantity; i++) {
      length.push(i);
    }

    return length.map((t) => <td key={t}></td>);
  };
  return (
    <>
      <Card
        style={{
          border: 1,
          borderStyle: 'solid',
          borderColor: customColor ? customColor[2] : theme.colors.gray[2],
        }}
        p={0}
      >
        {/* {searchable && (
          <>
            <GlobalFilter
              preGlobalFilterRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <Divider my={'xs'} color={color ? color : 'gray'} />
          </>
        )} */}
        <Table {...getTableProps()} width={'100%'} color={theme.colors.blue[9]}>
          {!hiddenHeader && (
            <thead>
              {form === undefined &&
                headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    style={{
                      backgroundColor: customColor
                        ? customColor[2]
                        : theme.colors.gray[2],
                    }}
                  >
                    {headerGroup.headers.map((column: HeaderGroup<any>) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        style={{ width: column.width }}
                      >
                        <Grid>
                          <Grid.Col span={column.isSorted ? 10 : 12}>
                            {column.render('Header')}
                          </Grid.Col>
                          {column.isSorted && (
                            <Grid.Col span={2}>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  // <FontAwesomeIcon icon={faSortDown} />
                                  <IconSortDescending />
                                ) : (
                                  // <FontAwesomeIcon icon={faSortUp} />
                                  <IconSortAscending />
                                )
                              ) : (
                                ''
                              )}
                            </Grid.Col>
                          )}
                        </Grid>
                        {/*<Group position={"apart"} spacing={4}>*/}
                        {/*    */}
                        {/*    */}
                        {/*</Group>*/}
                      </th>
                    ))}
                  </tr>
                ))}

              {form !== undefined &&
                headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    style={{
                      backgroundColor: customColor
                        ? customColor[2]
                        : theme.colors.gray[2],
                    }}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{ width: column.width }}
                      >
                        {column.render('Header')}
                        {/*<Group position={"apart"} spacing={4}>*/}
                        {/*    {column.isSorted ? (column.isSortedDesc ?*/}
                        {/*        <FontAwesomeIcon icon={faSortDown}/> :*/}
                        {/*        <FontAwesomeIcon icon={faSortUp}/>) : ""}*/}
                        {/*</Group>*/}
                      </th>
                    ))}
                  </tr>
                ))}
            </thead>
          )}

          {form ? <tbody>{form ? form : null}</tbody> : null}
          <tbody {...getTableBodyProps()}>
            {(pagination ? page : rows).map((row: Row, idx: number) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={
                    striped
                      ? {
                          backgroundColor: isEven(idx)
                            ? customColor
                              ? customColor[1]
                              : theme.colors.gray[1]
                            : undefined,
                        }
                      : undefined
                  }
                >
                  {row.cells.map((cell: Cell, index: number) => {
                    return (
                      <td
                        style={
                          bordered
                            ? {
                                border: 1,
                                borderStyle: 'solid',
                                borderColor: customColor
                                  ? customColor[3]
                                  : theme.colors.gray[3],
                              }
                            : undefined
                        }
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {showTotal && rows.length > 0 && (
            <tbody {...getTableBodyProps()}>
              <tr
                style={{
                  borderTop: 1,
                  borderTopStyle: 'solid',
                  borderTopColor: customColor
                    ? customColor[3]
                    : theme.colors.gray[3],
                }}
              >
                <td
                  colSpan={
                    rows[0].cells.length - (totalColumn ? totalColumn : 1)
                  }
                >
                  <Text align={'right'} weight={'bold'} color={color}>
                    TOTAL
                  </Text>
                </td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: 'solid',
                    borderLeftColor: customColor
                      ? customColor[3]
                      : theme.colors.gray[3],
                  }}
                >
                  <Text size={'xl'} align={'center'} weight={'bold'}>
                    {totalPrice}
                  </Text>
                </td>
                {createTd(totalColumn ? totalColumn : 1)}
              </tr>
            </tbody>
          )}
        </Table>
      </Card>
      {pagination && (
        <Group
          position={'apart'}
          mt={'xs'}
          p={4}
          style={{
            border: 1,
            borderStyle: 'solid',
            borderColor: customColor ? customColor[2] : theme.colors.gray[2],
          }}
        >
          <Text size={'xs'} weight={'bold'}>
            Page {pageIndex + 1} / {pageOptions.length} ({data.length})
          </Text>

          <Group spacing={4}>
            <Button
              size={'xs'}
              color={color}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {/* <FontAwesomeIcon icon={faAngleDoubleLeft} /> */}
              <IconChevronsLeft />
            </Button>
            <Button
              size={'xs'}
              color={color}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
              <IconChevronLeft />
            </Button>
            <TextInput
              // defaultValue={0}
              placeholder={'Numéro de page'}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: 60 }}
              color={customColor ? customColor[9] : theme.colors.gray[9]}
              size={'xs'}
            />
            <Button
              size={'xs'}
              color={color}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {/* <FontAwesomeIcon icon={faAngleRight} /> */}
              <IconChevronRight />
            </Button>
            <Button
              size={'xs'}
              color={color}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {/* <FontAwesomeIcon icon={faAngleDoubleRight} /> */}
              <IconChevronsRight />
            </Button>
          </Group>

          <Select
            value={pageSize.toString()}
            data={[5, 10, 20, 30, 50, 100].map((pageSize) => {
              return { label: pageSize.toString(), value: pageSize.toString() };
            })}
            onChange={(e) => {
              setPageSize(Number(e));
            }}
            size={'xs'}
            style={{ width: 65 }}
          />
        </Group>
      )}
    </>
  );
};

// export default CustomTable;
