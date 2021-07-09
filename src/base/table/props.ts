import * as CSS from "csstype";
import { PropType } from "vue";

export type TableSortOrder = "ad" | "da";

export type TableSortMethod<T = any> = (
  data: T[],
  sortBy: string,
  descending: boolean
) => T[];

export const tableSortProps = {
  sortMethod: Function as PropType<TableSortMethod>,
  columnSortOrder: {
    type: String as PropType<TableSortOrder>,
  },
};

export type RowSelectionHandlerPayload<T = any> = {
  rows: T[];
  keys: string[];
  added: boolean;
  ev: Event;
};

export type RowSelectionHandler = (details: RowSelectionHandlerPayload) => void;

export const tableRowSelectionProps = {
  selection: {
    type: String as PropType<"single" | "multiple" | "none">,
    default: "none",
  },
  selected: {
    type: Array,
  },
  onSelection: Function as PropType<RowSelectionHandler>,
};

export const tableRowExpandedProps = {
  expanded: Array as PropType<string[]>,
};

export type TablePaginationProps = {
  sortBy?: string;
  descending?: boolean;
  page?: number;
  rowsPerPage?: number;
};

export const tablePaginationProps = {
  pagination: Object as PropType<TablePaginationProps>,
  rowsPerPageOptions: {
    type: Array as PropType<number[]>,
  },
};

export type TableGridRowClickHandler<T = any> = (
  ev: Event,
  row: T,
  pageIndex: number
) => void;
export const tableGridProps = {
  onRowClick: Function as PropType<TableGridRowClickHandler>,
  onRowDblclick: Function as PropType<TableGridRowClickHandler>,
};

export type TableColumnProps<R = any, V = any> = {
  name?: string;
  label: string;
  field?: (row: R) => any | string;
  required?: boolean;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  sort?: (a: V, b: V, rowA?: R, rowB?: R) => number;
  sortOrder?: TableSortOrder;
  format?: (val: V, row?: R) => any;
  style?: string | string[] | CSS.Properties;
  classes?: string;
  headerStyle?: string | string[] | CSS.Properties;
  headerClasses?: string;
};

export type GetCellValueHandler<R = any> = (
  col: TableColumnProps,
  row: R
) => any;

export type TableFilterMethod<R = any, T = string> = (
  rows: R[],
  terms: T,
  cols?: TableColumnProps[],
  getCellValue?: GetCellValueHandler
) => R[];

export const tableFilterProps = {
  filter: [String, Object],
  filterMethod: {
    type: Function as PropType<TableFilterMethod>,
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
  rowContextmenu: Function as PropType<TableGridRowClickHandler>,
};

export type TableHeaderProps = {
  cols: TableColumnProps[];
  colsMap: Record<string, TableColumnProps>;
  sort: (col: string | TableColumnProps) => void;
  selected: boolean;
  expand: boolean;
  color: string;
  dark: boolean;
  dense: boolean;
};

export type TableHeaderColumnProps = TableHeaderProps & {
  col: TableColumnProps;
};

export type TableBodyProps<R = any> = TableHeaderProps & {
  key: any;
  row: R;
  rowIndex: number;
  pageIndex: number;
};
export type TableItemProps<R = any> = TableBodyProps<R>;

export type TableBodyCellProps<R = any> = TableBodyProps<R> & {
  col: TableColumnProps;
  value: any;
};

export type TableTopRowProps = {
  cols: TableColumnProps[];
};

export type TableBottomRowProps = TableTopRowProps;

export type TablePaginationSlotProps = {
  pagination: TablePaginationProps;
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

export type TableTopProps = TablePaginationSlotProps;
export type TableTopLeftProps = TablePaginationSlotProps;
export type TableTopRightProps = TablePaginationSlotProps;
export type TableBottomProps = TablePaginationSlotProps;

export type TableNoDataProps = {
  message: string;
  icon: string;
};

export type TableOnRequestProps = {
  pagination: TablePaginationProps;
  filter: TableFilterMethod;
  getCellValue: GetCellValueHandler;
};

export type XTableSlots<T = any> = {
  loading?: () => JSX.Element;
  item?: (props: TableItemProps<T>) => JSX.Element;
  header?: (props: TableHeaderProps) => JSX.Element;
  body?: (props: TableBodyProps<T>) => JSX.Element;
  "body-cell"?: (props: TableBodyCellProps<T>) => JSX.Element;
  "body-selection"?: (props: TableBodyCellProps<T>) => JSX.Element;
  "header-cell"?: (props: TableHeaderColumnProps) => JSX.Element;
  "header-selection"?: (props: TableHeaderColumnProps) => JSX.Element;
  "top-row"?: (props: TableTopRowProps) => JSX.Element;
  "bottom-row"?: (props: TableBottomRowProps) => JSX.Element;
  top?: (props: TableTopProps) => JSX.Element;
  "top-left"?: (props: TableTopLeftProps) => JSX.Element;
  "top-right"?: (props: TableTopRightProps) => JSX.Element;
  "top-selection"?: (props: TableTopProps) => JSX.Element;
  bottom?: (props: TableBottomProps) => JSX.Element;
  pagination?: (props: TablePaginationProps) => JSX.Element;
  "no-data"?: (props: TableNoDataProps) => JSX.Element;
  [key: string]: (props: any) => JSX.Element;
};
