import React from 'react'
import './CompanyDoc.css'
import { FcPlus, FcRemoveImage } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { AiFillEye } from "react-icons/ai";



const CompanyDoc = ({ handleCompDocRecall }) => {
    return (
        <div className='COMPDOC-WRAPPER'>
            <div className='COMPDOC-CONT'>

                <div className='CMPDOC-Head-Cont'>
                    <div className='CMPDOC-Head-left-content'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className='CMPDOC-CMPDOC'>COMPANY DOCUMENTS</span>
                    </div>
                    <div onClick={handleCompDocRecall} className='CMPDOC-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>

                <div className='CMPDOC-Table'>
                    <p>Click the names to see more data.</p>
                    <table>
                        <thead>
                            <tr class="table-headers">
                                <th>DocType</th>
                                <th>Remark</th>
                                <th>Exp Date</th>
                                <th>Upload</th>
                                <th>View</th>
                                <th>Remove</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><FcPlus /></td>
                                <td><AiFillEye /></td>
                                <td><TfiClose /></td>
                                <td>new</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='CMPDOC-BTM-BANNER'>
                    <div className='SVDTLS-BUTTON'>
                        <button>Save Details</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyDoc