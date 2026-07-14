import { useState } from "react";
import ListTrainers from "../ListTrainers";
import TrainerForm from "../TrainerForm";
import './lifting.css';


function LiftingStatePage() {
    const [trainers, setTrainers] = useState([]);
    return (
        <>
            <h1>Lifting State</h1>
            <section className="lifting-container">
                <div>
                    <ListTrainers trainers={trainers} />
                </div>
                <div>
                    <TrainerForm setTrainers={setTrainers} />
                </div>
            </section>

        </>
    );
}

export default LiftingStatePage;