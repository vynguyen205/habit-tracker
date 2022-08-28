// TODO: save new habit to database
// TODO: add new habit to list of habits that are displayed

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useAtom } from "jotai";
import { userAtom } from "../../state"
import { ADD_HABIT } from "../../utils/Mutations";
import "../../App.css";

import AuthService from "../../utils/Auth";


// Add new habits for a logged in user
const AddHabit = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useAtom(userAtom)
  // get habit name and description from form
  const [habitFormData, setHabitFormData] = useState({
    habitName: "",
    habitDescription: "",
    habitCompleted: false,
  });

  // function to use mutation to add new habit
  const [addHabit, { error }] = useMutation(ADD_HABIT);
  // function to handle form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHabitFormData({ ...habitFormData, [name]: value });
  }

  // function to handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add habit to database
      const { data } = await addHabit({
        // variables to pass to mutation
        variables: { userId: AuthService.getProfile().data._id, ...habitFormData },
      });

      setUser(data?.addHabit?.habitUser)
    } catch (err) {
      console.error(err);
    }

    setHabitFormData({
      habitName: "",
      habitDescription: "",
      habitCompleted: false,
    });

    setShowModal(false);

  }


  //DONT DO THIS, TESTING ONLY
  // useEffect(()=> {
  //   addHabit({
  //     variables: {
  //       habitName: "Eat222",
  //       userId: "62fe9cbb970457d5b9eb5e31",
  //     } 
  //   })
  // }, [])

  return (
    <>
      <button
        className="bg-lightBlue text-white fixed bottom-14 right-14 text-3xl active:bg-darkBlue font-bold px-5 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-full mr-1 mb-1"
        type="button" onClick={() => setShowModal(true)}>
        +
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 bg-lightBlue border-b border-solid border-white rounded-t ">
                  <h3 className="text-3xl font=semibold">Create Habit</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-8 w-8 text-lg block bg-black py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleFormSubmit}>
                    <label className="block text-black text-sm font-bold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      name="habitName"
                      placeholder="Add habit..."
                      value={habitFormData.habitName}
                      onChange={handleInputChange} />
                    <label className="block text-black text-sm font-bold mb-1">
                      Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="text"
                    name="habitDescription" 
                    placeholder="Keep it short and sweet..." 
                    value={habitFormData.habitDescription}
                    onChange={handleInputChange} 
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Tags
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    type="text"
                    name="allTags"
                    placeholder="Choose your tags..."
                    value={habitFormData.allTags}
                    onChange={handleInputChange}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Repeat
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                    type="text"
                    name="repeat"
                    placeholder="Repeat..."
                    value={habitFormData.repeat}
                    onChange={handleInputChange}
                    />
                    placeholder="Daily" />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 rounded-b">
                  <button
                    className="text-black bg-lightOrange active:bg-darkOrange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddHabit;
