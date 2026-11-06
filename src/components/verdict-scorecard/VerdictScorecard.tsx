import React from "react";
import { Container } from "react-bootstrap";
import "./VerdictScorecard.css";

interface ScoreMetric {
  label: string;
  score: number;
  maxScore?: number;
  highlight?: boolean;
  badge?: string;
}

const metrics: ScoreMetric[] = [
  { label: "Ease of use", score: 9.4 },
  { label: "AI features", score: 9.7 },
  { label: "Speed / performance", score: 9.5 },
  { label: "Builder compatibility", score: 9.6 },
  { label: "Value for money", score: 9.5 },
  {
    label: "Support quality",
    score: 9.9,
    highlight: true,
    badge: "5/5 ★",
  },
];

const VerdictScorecard: React.FC = () => {
  const overallScore = 9.6;

  return (
    <section
      id="verdict-scorecard"
      className="section verdict-scorecard-section"
      aria-label="Plugin review scorecard"
    >
      <Container>
        <div className="verdict-scorecard-card">
          {/* Left Column: Overall Score */}
          <div className="verdict-scorecard__score-col">
            <div className="verdict-scorecard__big-score-group">
              <span className="verdict-scorecard__big-score">
                {overallScore}
              </span>
              <span className="verdict-scorecard__score-denom">/ 10</span>
            </div>
            <div className="verdict-scorecard__badge">
              <span className="verdict-scorecard__badge-stars">★★★★★</span>
              <span>EXCELLENT</span>
            </div>
          </div>

          {/* Middle Column: Rating Progress Bars */}
          <div className="verdict-scorecard__metrics-col">
            {metrics.map((metric) => {
              const percentage = Math.min(
                100,
                Math.round((metric.score / 10) * 100),
              );

              return (
                <div
                  key={metric.label}
                  className={`verdict-metric-row ${
                    metric.highlight ? "verdict-metric-row--highlight" : ""
                  }`}
                >
                  <span className="verdict-metric__label">
                    {metric.label}
                    {metric.badge && (
                      <span className="verdict-metric__special-badge">
                        {metric.badge}
                      </span>
                    )}
                  </span>

                  <div
                    className="verdict-metric__track"
                    role="progressbar"
                    aria-valuenow={metric.score}
                    aria-valuemin={0}
                    aria-valuemax={10}
                    aria-label={`${metric.label}: ${metric.score} out of 10`}
                  >
                    <div
                      className="verdict-metric__fill"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="verdict-metric__score">
                    {metric.score.toFixed(1)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Verdict */}
          <div className="verdict-scorecard__verdict-col">
            <p className="verdict-scorecard__text">
              Re Gallery is the first WordPress gallery plugin to build genuine
              AI automation into its core rather than bolting it on as an add-on.
              The free tier alone outperforms several competitors' paid tiers,
              and the AI alt text feature solves a problem almost nobody manually
              fixes. Backed by top-rated 5/5 support, it's a clear upgrade over
              legacy gallery plugins for photographers, agencies, and
              WooCommerce stores.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VerdictScorecard;
