import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')       //should update later before release lesson 9
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        } 
        
        fetchWorkouts()
    }, []) // [] is use so that ith function only fires one time, not every time the component loads

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home;