import React  from "react";
const list = ({people, deletePeople}) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <div className="mt-7 flex relative">
                        <div className="flex h-auto ">
                            <div className="">
                                <img className="rounded-full h-24 w-24 object-cover" src={person.image} alt="" />
                            </div>
                            <div className="mt-4 ml-3">
                                <h1 className="text-xl mb-1 font-bold tracking-wider">{person.name}</h1>
                                <p className="text-gray-500 tracking-widest">{person.age} years</p>
                            </div>
                        </div>
                        <div className="mt-7 absolute right-3">
                            <span className="text-2xl font-semibold cursor-pointer hover:text-pink-400" onClick={ () => deletePeople(person.id)  }>X</span>
                        </div>
                    </div>
                );
            })}
        </>
    
    );
};
export default list;
