
import {useState} from "react";

import OverviewTab from "./components/OverviewTab";
import ModelTab from "./components/ModelTab";
import PredictorTab from "./components/PredictorTab";
import DataTab from "./components/DataTab";
import AboutTab from "./components/AboutTab";

export default function App(){

const [tab,setTab]=useState("Overview");

return(

<div>

<header className="navbar">

<h1>Titanic Dashboard</h1>

<div>

<button onClick={()=>setTab("Overview")}>Overview</button>
<button onClick={()=>setTab("Model")}>Model</button>
<button onClick={()=>setTab("Predictor")}>Predictor</button>
<button onClick={()=>setTab("Data")}>Data</button>
<button onClick={()=>setTab("About")}>About</button>

</div>

</header>

<main>

{tab==="Overview" && <OverviewTab/>}
{tab==="Model" && <ModelTab/>}
{tab==="Predictor" && <PredictorTab/>}
{tab==="Data" && <DataTab/>}
{tab==="About" && <AboutTab/>}

</main>

</div>

);

}
