import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.Feedback_Controls}>
      {options.map(option => (
        <button
          className={css.Feedback_Btn}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
};

export default FeedbackOptions;
