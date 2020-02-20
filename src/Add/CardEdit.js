import React from 'react'
import "./CardEdit.sass"
import ava from "./ava.png"

const CardEdit = () => {
    return (
        <div>
            <form>
                <div className="ava-holder-editpage">
                    <img src={ava} alt=""/>
                </div>
                <div>
                    <input className="edt-input" placeholder="Fullname" />
                </div>
                <div>
                    <input className="edt-input" placeholder="Number" />
                </div>
                <div>
                    <input className="edt-input" placeholder="Adittional number" />
                </div>
                <div>
                    <input className="edt-input" placeholder="Company"/>
                </div>
                <div>
                    <input className="edt-input" placeholder="Email"/>
                </div>
                <select className="edt-input" defaultValue="Type">
                    <option value="" hidden>Type</option>
                    <option value="Work">Work</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                    <option value="Other">Other</option>
                </select>
                <button className="sbmt-btn">Save</button>
            </form>
        </div>
    )
}

export default CardEdit;