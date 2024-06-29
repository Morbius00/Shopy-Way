import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PinkButton = ({ children, className, onClick, disabled, to }) => {
  const button = (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-2xl font-medium text-xl px-[2vw] py-[1vh] hover:bg-[#494848] bg-[#333333] text-white ${className}`}
    >
      {children}
    </button>
  );

  if (to) {
    return <Link to={to}>{button}</Link>;
  }

  return button;
};

PinkButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  to: PropTypes.string, // Add the to prop type
};

export default PinkButton;
