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
          <div className="flex flex-col items-center justify-center ring-2 ring-white w-[50vw] mx-auto  ">
            <input className=" flex "
              type="text"
              placeholder="add a new to do "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={addData}>"+"</button>
            <ul>
              {data.map((item, value) => (
                <div key={value} className=" flex  ">
                  <span>{item}</span>
                  <div className="flex ">
                    <button onClick={() => deleteData(item)}>"X"</button>
                    <button
                      onClick={() => moveUp(value)}
                      disabled={value === 0}
                    >
                      ⬆️
                    </button>
                    <button
                      onClick={() => moveDown(value)}
                      disabled={value === data.length - 1}
                    >
                      ⬇️
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
