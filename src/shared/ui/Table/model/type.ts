import { ClassNameProps } from "../../type"

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>, ClassNameProps {}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement>, ClassNameProps {}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement>, ClassNameProps {}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, ClassNameProps {}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement>, ClassNameProps {}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement>, ClassNameProps {}
