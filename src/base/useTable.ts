/* eslint-disable @typescript-eslint/no-explicit-any */
import * as CSS from "csstype";
import { PropType } from "vue";

export type QTableSortOrder = "ad" | "da";

export type QTableSortMethod<T = any> = (
  data: T[],
  sortBy: string,
  descending: boolean
) => T[];

export const tableSortProps = {
  sortMethod: Function as PropType<QTableSortMethod>,
  columnSortOrder: {
    type: String as PropType<QTableSortOrder>,
  },
};

export type QRowSelectionHandlerPayload<T = any> = {
  rows: T[];
  keys: string[];
  added: boolean;
  ev: Event;
};

export type QRowSelectionHandler = (
  details: QRowSelectionHandlerPayload
) => void;

export const tableRowSelectionProps = {
  selection: {
    type: String as PropType<"single" | "multiple" | "none">,
    default: "none",
  },
  selected: {
    type: Array,
  },
  onSelection: Function as PropType<QRowSelectionHandler>,
};

export const tableRowExpandedProps = {
  expanded: Array as PropType<string[]>,
};

export type QTablePaginationProps = {
  sortBy?: string;
  descending?: boolean;
  page?: number;
  rowsPerPage?: number;
};

export const tablePaginationProps = {
  pagination: Object as PropType<QTablePaginationProps>,
  rowsPerPageOptions: {
    type: Array as PropType<number[]>,
  },
};

export type QTableGridRowClickHandler<T = any> = (
  ev: Event,
  row: T,
  pageIndex: number
) => void;
export const tableGridProps = {
  onRowClick: Function as PropType<QTableGridRowClickHandler>,
  onRowDblclick: Function as PropType<QTableGridRowClickHandler>,
};

export type QTableColumnProps<R = any, V = any> = {
  name?: string;
  label: string;
  field?: ((row: R) => unknown) | string;
  required?: boolean;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  sort?: (a: V, b: V, rowA?: R, rowB?: R) => number;
  sortOrder?: QTableSortOrder;
  format?: (val: V, row?: R) => unknown;
  style?: string | string[] | CSS.Properties;
  classes?: string;
  headerStyle?: string | string[] | CSS.Properties;
  headerClasses?: string;
};

export type GetCellValueHandler<R = any> = (
  col: QTableColumnProps,
  row: R
) => any;

export type QTableFilterMethod<R = any, T = string> = (
  rows: R[],
  terms: T,
  cols?: QTableColumnProps[],
  getCellValue?: GetCellValueHandler
) => R[];

export const tableFilterProps = {
  filter: [String, Object],
  filterMethod: {
    type: Function as PropType<QTableFilterMethod>,
  },
};

export const tableColumnSelectionProps = {
  visibleColumns: Array as PropType<string[]>,
};

export const tableBottomProps = {
  hideBottom: Boolean,
  hideSelectedBanner: Boolean,
  hideNoData: Boolean,
  hidePagination: Boolean,
};

export const tableBodyProps = {
  ...tableGridProps,
  rowContextmenu: Function as PropType<QTableGridRowClickHandler>,
};

export type QTableHeaderProps = {
  cols: QTableColumnProps[];
  colsMap: Record<string, QTableColumnProps>;
  sort: (col: string | QTableColumnProps) => void;
  selected: boolean;
  expand: boolean;
  color: string;
  dark: boolean;
  dense: boolean;
};

export type QTableHeaderColumnProps = QTableHeaderProps & {
  col: QTableColumnProps;
};

export type QTableBodyProps<R = any> = QTableHeaderProps & {
  key: any;
  row: R;
  rowIndex: number;
  pageIndex: number;
};
export type QTableItemProps<R = any> = QTableBodyProps<R>;

export type QTableBodyCellProps<R = any> = QTableBodyProps<R> & {
  col: QTableColumnProps;
  value: any;
};

export type QTableTopRowProps = {
  cols: QTableColumnProps[];
};

export type QTableBottomRowProps = QTableTopRowProps;

export type QTablePaginationSlotProps = {
  pagination: QTablePaginationProps;
  pagesNumber: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  inFullscreen: boolean;
  firstPage: () => void;
  prevPage: () => void;
  nextPage: () => void;
  lastPage: () => void;
  toggleFullscreen: () => void;
};

export type QTableTopProps = QTablePaginationSlotProps;
export type QTableTopLeftProps = QTablePaginationSlotProps;
export type QTableTopRightProps = QTablePaginationSlotProps;
export type QTableBottomProps = QTablePaginationSlotProps;

export type QTableNoDataProps = {
  message: string;
  icon: string;
};

export type QTableOnRequestProps = {
  pagination: QTablePaginationProps;
  filter: QTableFilterMethod;
  getCellValue: GetCellValueHandler;
};

export type QTableSeparator = "horizontal" | "vertical" | "cell" | "none";
export type QTableRequestHandlerPayload = {
  pagination: QTablePaginationProps;
  filter: QTableFilterMethod;
  getCelValue: GetCellValueHandler;
};
