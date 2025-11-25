import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNotes, deleteNotes, editNotes } from './redux/slices/noteSlice';

function App() {

  const [notes, setNotes] = useState();
  const notesState = useSelector(state => state.noteReducer);
  const [editId, setEditId] = useState(null)
  const [editInput, setEditInput] = useState("")

  console.log(notesState);
  const dispatch = useDispatch()

  const handleEdit = (id, text) => {
    setEditId(id)
    setEditInput(text)
  }

  const saveEdit = () => {
    dispatch(editNotes({ id: editId, updatedText: editInput }))
    setEditId(null)
    setEditInput("")
  }




  return (
    <>
      <div className='flex flex-col min-h-screen justify-center items-center '>
        <div className='my-25 bg-amber-200 p-10 rounded-3xl'>
          <h1>Add New Notes</h1>
          <input onChange={(e) => setNotes(e.target.value)} type="text" className='border-2 rounded-2xl' name="" id="" />
          <button onClick={() => dispatch(addNotes(notes))} className='bg-amber-300 p-2 rounded-2xl'>Add</button>
        </div>

        <div className='h-[700px]'>
          <h1 className='text-4xl'>Notes</h1>

          <div className='flex flex-col'>

            {notesState.map((item) => (

              <div key={item.id} className='w-[500px] p-3 flex  justify-between bg-amber-100 rounded-2xl'>

                {/* If editing this item */}
                {editId === item.id ? (
                  <input
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="border p-2 rounded-lg w-full"
                  />
                ) : (
                  <span>{item.text}</span>
                )}


                <div>
                  {editId === item.id ? (
                    <button
                      onClick={saveEdit}
                      className='bg-green-500 p-2 mx-2 rounded-xl'
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item.id, item.text)}
                      className='bg-blue-500 p-2 mx-2 rounded-xl'
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => dispatch(deleteNotes(item.id))}
                    className='bg-red-500 p-2 mx-2 rounded-xl'
                  >
                    Delete
                  </button>
                </div>
              </div>

            ))}



          </div>

        </div>

      </div>

    </>
  )
}

export default App
