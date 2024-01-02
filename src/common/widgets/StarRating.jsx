import { FaStar } from 'react-icons/fa';

export const StarRating = ({ rating }) => {
    return (
        <div className=' flex flex-row'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i} >
                        <FaStar color={ratingValue <= rating ? "#C89D66" : "#333642"} />
                    </label>
                );
            })}
        </div>
    );
};