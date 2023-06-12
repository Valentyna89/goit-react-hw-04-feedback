import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const quantity = good + neutral + bad;
    return quantity;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = total ? (good / total) * 100 : 0;
    return Number(percentage).toFixed(0);
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.Container}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
