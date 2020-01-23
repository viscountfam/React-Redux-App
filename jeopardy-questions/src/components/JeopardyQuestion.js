import React from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchActivity } from '../actions'
 function JeopardyQuestion(props) {
    return (
        <div>
            <button className="clue-btn" onClick={props.fetchActivity}>New Clue</button>
            {!props.question && !props.isLoading && (
                <h2>Get a Jeopardy Clue</h2>
            )}
            {props.isLoading && (
                <Loader
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={100000}
                 />
            )}
            {props.question && !props.isLoading && <h2>{props.question.question}</h2>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        question: state.question,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchActivity}
)(JeopardyQuestion);
