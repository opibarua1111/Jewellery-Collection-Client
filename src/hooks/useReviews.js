import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://salty-inlet-11821.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return { reviews };
}

export default useReviews;