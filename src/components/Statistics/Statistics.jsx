import PropTypes from 'prop-types';

export const Statistics = ({score}) => {
    return (
        <>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {score.good}</li>
                <li>Neutral: {score.neutral}</li>
                <li>Bad: {score.bad}</li>
            </ul>
        </>
            
    )
}