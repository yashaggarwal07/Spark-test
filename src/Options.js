import React from 'react';
import './Options.css';

function Options() {
    return (
        <div className="Options">
        <div className="options_one">
            <form>
                <h3>Portugal</h3>
                <input type="checkbox" />
                <label>Aasiya Jayavant </label><br />
                <input type="checkbox" />
                <label>Lulven Lawrence </label><br />
                <input type="checkbox" />
                <label>Rey Miboure     </label><br />
                <input type="checkbox" />
                <label>Cayla Brister   </label><br />
            </form>
        </div>
        <div className="options_one">
            <form>
                <h3>Nicaragua</h3>
                <input type="checkbox" />
                <label>Devdut Sharma </label>
                <input type="checkbox" />
                <label>KL Rahul      </label>
                <input type="checkbox" />
                <label>Hardik Panya  </label>
                <input type="checkbox" />
                <label>Shubham Gill  </label>
            </form>
        </div>
        <div className="options_one">
            <form>
                <h3>Marshal Island</h3>
                <input type="checkbox" />
                <label>Aaron Finch</label> 
                <input type="checkbox" />
                <label>Fa Du plase</label> 
                
            </form>
        </div>
        </div>
    )
}

export default Options
