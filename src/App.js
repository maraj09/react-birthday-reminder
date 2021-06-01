import React, { useState } from "react";
import data from "./data";
import List from "./list";
function App() {
    const [people, setPeople] = useState(data);
    const deletePeople = (id) => {
        const newPeople = people.filter((people) => people.id !== id);
        setPeople(newPeople);
    };
    return (
        <div className="body mx-auto bg-white mt-15 rounded shadow-xl">
            <div className="m-8 py-5">
                <h1 className="text-3xl">{people.length} Birthdays Today</h1>
                <List people={people} deletePeople={deletePeople}  />
                <div className="mt-7 mx-auto w-11/12">
                    <button className="bg-pink-400 hover:bg-opacity-80 text-white w-full py-2 text-2xl tracking-widest" onClick={() => setPeople([])}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
