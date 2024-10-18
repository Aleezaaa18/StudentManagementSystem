import React, { useState } from "react";
import Filter from "./components/Filter"
import DataTable from "./components/StudentTable"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [minDate, setMinDate] = useState("")
  const [maxDate, setMaxDate] = useState("")

  const studentsData = [
    { lastName: "Campos", firstName: "Rich Aleeza", course: "BSIT", birthdate: "2003-10-23" },
    { lastName: "Colina", firstName: "Macey Chloe", course: "BSIS", birthdate: "2002-08-05" },
    { lastName: "Amelda", firstName: "Sarah Jessica", course: "BSCS", birthdate: "2004-03-10" },
    { lastName: "Mosquera", firstName: "Arianne Marie", course: "BSDS", birthdate: "2001-07-25" },
    { lastName: "Chloe Madison", firstName: "Carino", course: "BSDS", birthdate: "2001-06-10" },
  ]

  return (
    <div>
      <h1>Student Data Table</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate}
      />
      <DataTable 
        students={studentsData}
        searchTerm={searchTerm} 
        minDate={minDate} 
        maxDate={maxDate} 
      />
    </div>
  )
}

export default App