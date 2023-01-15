import PropTypes from 'prop-types';

export const Feedback = ({onClick}) => {
    return (
        <>
            <h2>Please leave feedback</h2>
            <button type='button' onClick={() => onClick("good") }>Good</button>
            <button type='button' onClick={() => onClick("neutral") }>Neutral</button>
            <button type='button' onClick={() => onClick("bad") }>Bad</button>
        </>
        
    )
}

