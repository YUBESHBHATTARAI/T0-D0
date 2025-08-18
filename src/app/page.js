"use client";
import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const addData = () => {
    if (search.trim() === "") return;

    setData([...data, search]);
    setSearch("");
  };

  const deleteData = (Delitem) => {
    setData(data.filter((item) => item !== Delitem));
  };

  const moveUp = (index) => {
    const newData = [...data];
    [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    setData(newData);
  };
  const moveDown = (index) => {
    const newData = [...data];
    [newData[index + 1], newData[index]] = [newData[index], newData[index + 1]];
    setData(newData);
  };

  return (
    <>
      <div>
        <div>
          <h1 className=" text-center">to do list</h1>
          <div className="flex flex-col items-center justify-center ring-2 ring-white rounded-xl  w-[96vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] mx-auto gap-1   ">
            <input className=" px-6 py-2 mx-2 my-3 ring-1 ring-gray-300 rounded-md "
              type="text"
              placeholder="Add a new to do " 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="text-white text-4xl  rounded-md hover:cursor-pointer mb-2  " onClick={addData}><span className="text-2xl font-bold bg-gray-300 text-black p-1 rounded-md  ">+</span></button>
            <ul>
              {data.map((item, value) => (
                <div key={value} className=" flex justify-between items-center gap-4  mb-4  ">
                  <span className="text-4xl  rounded-md hover:cursor-pointer font-[Inter] text-white    ">{item}</span>
                  <div className="flex gap-3 ">
                    <button className="text-white text-3xl font-thin  rounded-md hover:cursor-pointer  " onClick={() => deleteData(item)}>  <span className="text-2xl font-bold bg-gray-300 text-black p-1 rounded-md  ">&#10005;</span></button>
                    <button
                    className="text-white text-3xl font-bold  rounded-md hover:cursor-pointer  "
                      onClick={() => moveUp(value)}
                      disabled={value === 0}
                    >
                     <span className="text-2xl font-bold bg-gray-300 text-black p-1 rounded-md ">&#8593;</span>
                    </button>
                    <button
                    className="text-white text-3xl font-bold rounded-md hover:cursor-pointer  "
                      onClick={() => moveDown(value)}
                      disabled={value === data.length - 1}
                    >
                      <span className="text-2xl font-bold bg-gray-300 text-black p-1 rounded-md ">&#8595;</span>
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
