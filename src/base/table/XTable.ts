import { QTable } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  useDarkProps,
  useFullScreenProps,
  useNativeEventProps,
} from "../../compositions/props";
import {
  GetCellValueHandler,
  tableBodyProps,
  tableBottomProps,
  TableColumnProps,
  tableColumnSelectionProps,
  TableFilterMethod,
  tableFilterProps,
  tableGridProps,
  TableOnRequestProps,
  tablePaginationProps,
  TablePaginationProps,
  tableRowExpandedProps,
  tableRowSelectionProps,
  tableSortProps,
} from "./props";

export type TableSeparator = "horizontal" | "vertical" | "cell" | "none";
export type TableRequestHandlerPayload = {
  pagination: TablePaginationProps;
  filter: TableFilterMethod;
  getCelValue: GetCellValueHandler;
};

const props = {
  ...useDarkProps,
  ...useNativeEventProps,
  ...useFullScreenProps,
  ...tableBodyProps,
  ...tableBottomProps,
  ...tableGridProps,
  ...tableSortProps,
  ...tableFilterProps,
  ...tablePaginationProps,
  ...tableRowSelectionProps,
  ...tableRowExpandedProps,
  ...tableColumnSelectionProps,
  rows: {
    type: Array,
    default: () => [],
  },
  rowKey: {
    type: [String, Function],
    default: "id",
  },
  columns: Array as PropType<TableColumnProps[]>,
  loading: Boolean,
  binaryStateSort: Boolean,

  iconFirstPage: String,
  iconPrevPage: String,
  iconNextPage: String,
  iconLastPage: String,

  title: String,

  hideHeader: Boolean,

  grid: Boolean,
  gridHeader: Boolean,

  dense: Boolean,
  flat: Boolean,
  bordered: Boolean,
  square: Boolean,
  separator: {
    type: String as PropType<TableSeparator>,
  },
  wrapCells: Boolean,

  virtualScroll: Boolean,
  noDataLabel: String,
  noResultsLabel: String,
  loadingLabel: String,
  selectedRowsLabel: Function,
  rowsPerPageLabel: String,
  paginationLabel: Function,
  color: {
    type: String,
    default: "grey-8",
  },
  titleClass: [String, Array, Object],
  tableStyle: [String, Array, Object],
  tableClass: [String, Array, Object],
  tableHeaderStyle: [String, Array, Object],
  tableHeaderClass: [String, Array, Object],
  cardContainerClass: [String, Array, Object],
  cardContainerStyle: [String, Array, Object],
  cardStyle: [String, Array, Object],
  cardClass: [String, Array, Object],
  onRequest: Function as PropType<(props: TableOnRequestProps) => void>,
};
export default QTable as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
