import "./Social.css"
import { socialHandles } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util";


function Socials() {
    return (
        <div className="socials">{
            socialHandles.map((list,index)=>(
                <a  
                className="icon" style={{
                    ...cssPerfectShape(40,40),
                    background: convertHexToRgba("--primary",0.5),
                }}
                key={index}>
                    <list.icon />
                </a>
            ))
        }
            </div>
      );
}

export default Socials;
