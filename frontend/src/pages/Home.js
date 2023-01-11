import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')       //should update later before release lesson 9
            const json = await response.json()

            if(response.ok) {
                dispatch({type: "SET_WORKOUTS", payload: json})
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
            <WorkoutForm />
        </div>
    )
}

export default Home;