import { pricingValueData } from "./pricing-value-data";

const PricingValueSection: React.FC = () => {
  return (
    <section id="pricing-value" className="pricing-value-section">
      <div className="pricing-value">
        <div className="pricing-value__header">
          <h2 className="section-text__title-centered">
            {pricingValueData.title}
          </h2>
          <p className="section-text__description-centered">
            {pricingValueData.description}
          </p>
        </div>
        <div className="pricing-value__table-wrapper">
          <table className="pricing-value__table">
            <thead>
              <tr>
                <th aria-label="Feature" />
                {pricingValueData.columns.map((column) => (
                  <th
                    key={column}
                    className={
                      column === "Re Gallery"
                        ? "pricing-value__highlight"
                        : undefined
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingValueData.rows.map((row) => (
                <tr key={row.label}>
                  <td className="pricing-value__row-label">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${index}`}
                      className={
                        index === 0 ? "pricing-value__highlight" : undefined
                      }
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pricing-value__mobile-list">
          {pricingValueData.rows.map((row) => (
            <div className="pricing-value__mobile-card" key={row.label}>
              <h3 className="pricing-value__mobile-title">{row.label}</h3>
              <div className="pricing-value__mobile-values">
                {row.values.map((value, index) => (
                  <div
                    key={`${row.label}-mobile-${index}`}
                    className={`pricing-value__mobile-value${
                      index === 0
                        ? " pricing-value__mobile-value--highlight"
                        : ""
                    }`}
                  >
                    <span className="pricing-value__mobile-column">
                      {pricingValueData.columns[index]}
                    </span>
                    <span className="pricing-value__mobile-result">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingValueSection;
