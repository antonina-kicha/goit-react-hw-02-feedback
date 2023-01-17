import PropTypes from 'prop-types';
import {ListButton, StatisticItem} from './Feedback.styled'


export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <ListButton>
                {options.map((option) => (
                <li key={option}><button type='button' onClick={() => onLeaveFeedback(option) }>{option}</button></li>

            ))}
                </ListButton>
        </>
        
    )
}

