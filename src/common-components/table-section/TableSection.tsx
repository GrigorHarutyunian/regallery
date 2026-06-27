import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { Row, Container } from "react-bootstrap";
import "./TableSection.css";

export type TableSectionCellValue =
  | boolean
  | string
  | {
      icon: boolean;
      note?: string;
    };

export interface TableSectionRow {
  label: string;
  values: TableSectionCellValue[];
}

export interface TableSectionRowGroup {
  title: string;
  rows: TableSectionRow[];
}

export interface TableSectionColumn {
  title: string;
  description?: string;
}

export interface TableSectionData {
  id?: string;
  title?: string;
  description?: string;
  featureColumnTitle?: string;
  columns: TableSectionColumn[];
  rows?: TableSectionRow[];
  rowGroups?: TableSectionRowGroup[];
  highlightColumnIndex?: number;
}

interface TableSectionProps {
  data: TableSectionData;
  color?: "light" | "dark" | "colorful" | "light-colorful";
}

const sectionColorClassNames = {
  light: "",
  dark: "black-section",
  colorful: "colorful-section",
  "light-colorful": "light-colorful-section",
};

const renderCellValue = (value: TableSectionCellValue): ReactNode => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckIcon className="table-section__icon table-section__icon--yes" />
    ) : (
      <CloseIcon className="table-section__icon table-section__icon--no" />
    );
  }

  if (typeof value === "string") {
    return <span>{value}</span>;
  }

  return (
    <span className="table-section__cell-value">
      {value.icon ? (
        <CheckIcon className="table-section__icon table-section__icon--yes" />
      ) : (
        <CloseIcon className="table-section__icon table-section__icon--no" />
      )}
      {value.note ? (
        <span className="table-section__cell-note">{value.note}</span>
      ) : null}
    </span>
  );
};

const formatCellForMobile = (value: TableSectionCellValue): ReactNode => {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value === "string") {
    return value;
  }

  if (value.note) {
    return value.icon ? value.note : `No — ${value.note}`;
  }

  return value.icon ? "Yes" : "No";
};

const getRowGroups = (data: TableSectionData): TableSectionRowGroup[] => {
  if (data.rowGroups?.length) {
    return data.rowGroups;
  }

  if (data.rows?.length) {
    return [{ title: "", rows: data.rows }];
  }

  return [];
};

const TableSection: React.FC<TableSectionProps> = ({ data, color = "light" }) => {
  const highlightIndex = data.highlightColumnIndex ?? 0;
  const rowGroups = getRowGroups(data);
  const featureColumnTitle = data.featureColumnTitle ?? "Feature";
  const sectionClassName = ["table-section", sectionColorClassNames[color]]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={data.id} className={sectionClassName}>
      <Container>
        <Row>
          <div className="table-section__inner">
            {(data.title || data.description) && (
              <div className="table-section__header">
                {data.title && (
                  <h2 className="section-text__title-centered">{data.title}</h2>
                )}
                {data.description && (
                  <p className="section-text__description-centered">
                    {data.description}
                  </p>
                )}
              </div>
            )}
            <div className="table-section__table-wrapper">
              <table className="table-section__table">
                <thead>
                  <tr>
                    <th className="table-section__feature-column">
                      {featureColumnTitle}
                    </th>
                    {data.columns.map((column, index) => (
                      <th
                        key={column.title}
                        className={
                          index === highlightIndex
                            ? "table-section__highlight"
                            : undefined
                        }
                      >
                        <span className="table-section__column-title">
                          {column.title}
                        </span>
                        {column.description && (
                          <span className="table-section__column-description">
                            {column.description}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowGroups.map((group) => (
                    <Fragment key={group.title || group.rows[0]?.label}>
                      {group.title && (
                        <tr
                          key={`group-${group.title}`}
                          className="table-section__group-row"
                        >
                          <td colSpan={data.columns.length + 1}>
                            {group.title}
                          </td>
                        </tr>
                      )}
                      {group.rows.map((row) => (
                        <tr key={row.label}>
                          <td className="table-section__row-label">
                            {row.label}
                          </td>
                          {row.values.map((value, index) => (
                            <td
                              key={`${row.label}-${index}`}
                              className={
                                index === highlightIndex
                                  ? "table-section__highlight"
                                  : undefined
                              }
                            >
                              {renderCellValue(value)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-section__mobile-list">
              {rowGroups.map((group) => (
                <div
                  key={group.title || "rows"}
                  className="table-section__mobile-group"
                >
                  {group.title && (
                    <h3 className="table-section__mobile-group-title">
                      {group.title}
                    </h3>
                  )}
                  {group.rows.map((row) => (
                    <div className="table-section__mobile-card" key={row.label}>
                      <h4 className="table-section__mobile-title">
                        {row.label}
                      </h4>
                      <div className="table-section__mobile-values">
                        {row.values.map((value, index) => (
                          <div
                            key={`${row.label}-mobile-${index}`}
                            className={`table-section__mobile-value${
                              index === highlightIndex
                                ? " table-section__mobile-value--highlight"
                                : ""
                            }`}
                          >
                            <span className="table-section__mobile-column">
                              <span>{data.columns[index].title}</span>
                              {data.columns[index].description && (
                                <span className="table-section__mobile-column-desc">
                                  {data.columns[index].description}
                                </span>
                              )}
                            </span>
                            <span className="table-section__mobile-result">
                              {formatCellForMobile(value)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default TableSection;
