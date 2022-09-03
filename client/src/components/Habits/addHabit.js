import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_HABIT } from "../../utils/Mutations";
import { QUERY_HABITS } from "../../utils/Queries";

import AuthService from "../../utils/Auth";
// import { useAtom } from "jotai";
// import { userAtom } from "../../state"


// Add new habits for a logged in user
const AddHabit = () => {
  const [showModal, setShowModal] = useState(false);
  // const [user, setUser] = useAtom(userAtom)
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
        variables: { 
          userId: AuthService.getProfile().data._id, 
          ...habitFormData 
        },
        refetchQueries: [
          {
            query: QUERY_HABITS,
            variables: {
              userId: AuthService.getProfile().data._id
            }
          }
        ]
      });

      // setUser(data?.addHabit?.habitUser)
      // window.location.reload();

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
        data-tooltip-target="add-habit"
        className="bg-lightBlue text-white text-3xl active:bg-darkBlue font-bold px-5 py-3 rounded-shadow hover:bg-darkBlue hover:shadow-lg outline-none focus:outline-none rounded-full mr-1 mb-1"
        type="button" onClick={() => setShowModal(true)}>
        +
      </button>
      <div id="add-habit" 
          role="tooltip" 
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-offBrown rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-offBrown">
            Add a new habit
            <div className='tooltip-arrow' data-popper-arrow></div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 bg-lightBlue border-b border-solid border-white rounded-t-2xl ">
                  <h3 className="text-2xl tracking-wider font=semibold">Create Habit</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    <span className="text-white opacity-7 h-8 w-8 text-lg block bg-black py-0 rounded-full hover:bg-darkBlue">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-white rounded px-8 pt-6 w-full" 
                          onSubmit={handleFormSubmit}>
                      <label className="block text-black text-sm font-bold mb-1">
                        Title
                      </label>
                      <input 
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-black"
                        type="text"
                        name="habitName" 
                        placeholder="Add habit..."
                        value={habitFormData.habitName}
                        onChange={handleInputChange}
                        />
                      <label className="block text-black text-sm font-bold  mt-4 mb-1">
                        Description
                      </label>
                      <input 
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      type="text"
                      name="habitDescription"
                      placeholder="Keep it short and sweet..." 
                      value={habitFormData.habitDescription}
                      onChange={handleInputChange}
                      />
                      {/* <label className="block text-black text-sm font-bold mb-1">
                        Repeat
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      name="habitRepeat"
                      placeholder="Repeat every..."
                      value={habitFormData.habitRepeat}
                      onChange={handleInputChange}
                      /> */}
                    <div className="flex items-center justify-center pt-10 rounded-b">
                      <button
                        className="text-black bg-lightOrange active:bg-darkOrange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                      {error && <div className="my-3 p-3 text-red">{error.message}</div>}
                  </form>
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
