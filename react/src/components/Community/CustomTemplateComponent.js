import React, { useState } from 'react';
import "../../styles/customtemplate.css"; 
import HeaderComponent from '../HeaderComponent.js';
import FooterComponent from '../FooterComponent.js';


function CustomTemplateComponent() {
  const [inputList, setInputList] = useState([{ name: "", dataType: "Text" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { name: "", dataType: "Text" }]);
  };

  return (
    <>
    <HeaderComponent/>
      <div className="root">
        <div className="post-container">
          <div className="column">
            <div className="title">
              <h2>Customize Template</h2>
            </div>
            <div className="template_FormContainer">
            <form className="form1">
          <label for="template_name">Template Name</label>
          <textarea id="template" name="template" rows="1"></textarea>
           </form>
           </div>
            {inputList.map((item, index) => (
              <div key={index} className="data-fields">
                <div className="flex-row">
                  <label htmlFor={`name-${index}`}>Field Name</label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    name="name"
                    value={item.name}
                    onChange={e => handleInputChange(e, index)}
                    placeholder="Enter Field Name"
                  />
                </div>
                <div className="flex-row">
                  <label htmlFor={`dataType-${index}`}>Data Type</label>
                  <select
                    id={`dataType-${index}`}
                    name="dataType"
                    value={item.dataType}
                    onChange={e => handleInputChange(e, index)}
                  >
                    <option value="Text">Text</option>
                    <option value="TextArea">TextArea</option>
                    <option value="Number">Number</option>
                    <option value="Photo">Photo</option>
                    <option value="File">File</option>
                  </select>
                </div>
                <div className="flex-row">
                  {inputList.length !== 1 && (
                    <button className='btn btn-lightblack'
                      onClick={() => handleRemoveClick(index)}
                    >
                      Remove Field
                    </button>
                  )}
                  {inputList.length - 1 === index && (
                    <button className='btn btn-lightblack' onClick={handleAddClick}>
                      Add Field
                    </button>
                    
                  )}
                         {inputList.length - 1 === index && (
                    <button  className='btn btn-red'>
                      <p> Save Template</p>
                    </button>
                    
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     <FooterComponent/>
    </>
  );
}

export default CustomTemplateComponent;
