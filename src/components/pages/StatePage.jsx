import Counter from "../Counter";
import ShoppingList from "../ShoppingList";
import TrainerForm from "../TrainerForm";

function StatePage() {
    return (
        <>
            <h1>State</h1>
            <Counter />
            <section>
                <h2>Form</h2>
                <TrainerForm />
            </section>

            <ShoppingList />
        </>
    );
}

export default StatePage;