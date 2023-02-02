interface ColumnModel {
  columnName: string;
}

export default interface TableConfigModel {
  columns: ColumnModel[];
}
