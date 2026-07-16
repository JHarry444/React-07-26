import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrainer } from "../redux/trainers";

// function TrainerForm() {
//     // name, age and specialty are all 'controlled components', meaning their values are controlled by react state

//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [specialty, setSpecialty] = useState("");

//     return (
//         <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
//             <label htmlFor="age">Age</label>
//             <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required min={0} />
//             <label htmlFor="specialty">Specialty</label>
//             <input type="text" name="specialty" id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required minLength={2} />
//         </form>
//     );
// }

// export default TrainerForm;


function TrainerForm() {
    // name, age and specialty are all 'controlled components', meaning their values are controlled by react state
    // let [data, setData] = useState({
    //     name: "",
    //     age: 0,
    //     specialty: ""
    // });

    const dispatch = useDispatch();

    const formAction = async (formData) => {
        // prev is the previous state of trainers, we spread it into a new array and add the new data to it

        const newTrainer = {
            name: formData.get("name"),
            age: Number(formData.get("age")),
            specialty: formData.get("specialty")
        }
        try {
            const res = await fetch("http://localhost:8080/trainers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTrainer)
            });
            if (res.status === 201) {
                dispatch(addTrainer(newTrainer));
                nameRef.current.focus();
            } else {
                throw new Error("Failed to add trainer");
            }
        } catch (error) {
            console.error("Error adding trainer:", error);
        }
    }

    const nameRef = useRef(null);



    return (
        <>
            <h2>Trainer Form</h2>
            <form action={formAction}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required minLength={2} ref={nameRef} />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" required min={18} />
                <label htmlFor="specialty">Specialty</label>
                <input type="text" name="specialty" id="specialty" required minLength={2} />
                <button type="submit">Submit</button>
            </form>
        </>

    );
}

export default TrainerForm;