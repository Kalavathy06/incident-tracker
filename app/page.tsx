import Navbar from "./components/Navbar";

import IncidentList from "./components/IncidentList";



export default function Home() {
  return (
    <div>
      

      <div className="flex-1 ml-52 p-4">
        <Navbar/>
        <IncidentList />
        
      </div>
    </div>
  );
}
