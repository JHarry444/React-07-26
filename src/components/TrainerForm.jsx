import { useState } from "react";

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
    let [data, setData] = useState({
        name: "",
        age: "",
        specialty: ""
    });

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })} required minLength={2} />
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" value={data.age}
                onChange={(e) => setData({ ...data, age: e.target.value })} required min={0} />
            <label htmlFor="specialty">Specialty</label>
            <input type="text" name="specialty" id="specialty" value={data.specialty}
                onChange={(e) => setData({ ...data, specialty: e.target.value })} required minLength={2} />
        </form>
    );
}

export default TrainerForm;