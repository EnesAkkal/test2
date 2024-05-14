import React, { useState } from 'react';
import "../../styles/customtemplate.css"; 
import HeaderComponent from '../HeaderComponent.js';
import FooterComponent from '../FooterComponent.js';
import axios from "api/axios.js";

function CustomTemplateComponent() {
  const [inputList, setInputList] = useState([{ name: "", dataType: "Text", value: "" }]);
  const [templateName, setTemplateName] = useState("");
  const [fieldTypes] = useState(["Text", "Number", "Date", "Image", "Geolocation"]);

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
    setInputList([...inputList, { name: "", dataType: "Text", value: "" }]);
  };

  const handleTemplateNameChange = (e) => {
    setTemplateName(e.target.value);
  };

  const handleSaveTemplate = async () => {
    if (!templateName) {
      alert("Please enter a template name.");
      return;
    }
    try {
      const response = await axios.post('/api/templates', { name: templateName, fields: inputList });
      console.log(response.data);
      alert('Template saved successfully!');
    } catch (error) {
      console.error('Failed to save template:', error);
      alert('Error saving template.');
    }
  };

  const handleGeolocation = (index) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const list = [...inputList];
        list[index].value = `${position.coords.latitude},${position.coords.longitude}`;
        setInputList(list);
      }, (error) => {
        alert("Geolocation error: " + error.message);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleDataTypeChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].dataType = value;
    list[index].value = ""; // Reset the value when the data type changes
    setInputList(list);
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
              <label htmlFor="template_name">Template Name</label>
              <textarea id="template" name="template" rows="1" onChange={handleTemplateNameChange}></textarea>
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
                    onChange={e => handleDataTypeChange(e, index)}
                  >
                    {fieldTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-row">
                  <label htmlFor={`input-${index}`}>Input</label>
                  {item.dataType === "Text" && (
                    <input
                      type="text"
                      id={`input-${index}`}
                      name="value"
                      value={item.value}
                      onChange={e => handleInputChange(e, index)}
                      placeholder="Enter Text"
                    />
                  )}
                  {item.dataType === "Number" && (
                    <input
                      type="number"
                      id={`input-${index}`}
                      name="value"
                      value={item.value}
                      onChange={e => handleInputChange(e, index)}
                      placeholder="Enter Number"
                    />
                  )}
                  {item.dataType === "Date" && (
                    <input
                      type="date"
                      id={`input-${index}`}
                      name="value"
                      value={item.value}
                      onChange={e => handleInputChange(e, index)}
                    />
                  )}
                  {item.dataType === "Image" && (
                    <input
                      type="file"
                      id={`input-${index}`}
                      name="value"
                      onChange={e => handleInputChange(e, index)}
                      accept="image/*"
                    />
                  )}
                  {item.dataType === "Geolocation" && (
                    <div>
                      <input
                        type="text"
                        id={`input-${index}`}
                        name="value"
                        value={item.value}
                        onChange={e => handleInputChange(e, index)}
                        placeholder="Latitude,Longitude"
                      />
                      <button type="button" onClick={() => handleGeolocation(index)}>
                        Use Current Location
                      </button>
                    </div>
                  )}
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
                    <button className='btn btn-red' onClick={handleSaveTemplate}>
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
