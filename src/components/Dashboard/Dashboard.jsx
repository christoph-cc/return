import "./Dashboard.scss";
import WordCloud from "../../components/WordCloud/WordCloud";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content-container">
        <h1 className="content-header">Overview</h1>

        <div className="conditions-container">
          <div className="conditions-text">
            <p className="conditions-text__header">Automated Conditions</p>
            <p className="conditions-text__body">
              You don't have any approval conditions applied
            </p>
          </div>
          <button></button>
        </div>

        <div className="analytics-container">
          <div className="analytics-text">
            <h1 className="analytics-text__header">Analytics</h1>
            <button className="analytics-text__buttons"></button>
          </div>

          <div className="analytics-body">
            <div className="wordcloud-map">
              <WordCloud />
            </div>
            <div className="analytics-subbody2">
              <div className="return-rate"></div>
              <div className="time-approve"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
