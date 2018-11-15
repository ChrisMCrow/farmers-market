import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  return(
    <div>
      <style jsx>{`
        h5.months {
          text-align: center;
          border-top: 1px solid gray;
          padding-top: 10px;
        }
        ul {
          text-align: center;
        }
        li {
          display: inline-block;
          color: white;
          font-weight: bold;
        }
        li:nth-child(odd) {
          color: gray;
        }
      `}</style>
      <h5 className="months marketFont">{props.month}</h5>
      <ul>
        {props.selection.map((produce, index) =>
          <li key={index}>
            {produce}&nbsp;|&nbsp;
          </li>
        )}
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string
};

export default Month;