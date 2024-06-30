import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Registry(){
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [error,setError] = useState(false);

    let addItem = (e)=>{
        e.preventDefault();
        if(error) return;
        //copy needed since its onlyread
        let tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput('');
    }

    useEffect(()=>{
        if(textInput.length > 10) setError(true);
        else setError(false);
    }, [textInput]);//everytime the textinput updates we call this effect

    const removeItem=(index)=>{
        let newData = [...registryData];
        newData.splice(index,1);
        setRegistryData(newData);
    }

    const editItem=(index)=>{
        if(error) return;
        let newData = [...registryData];
        newData[index]=textInput;
        setRegistryData(newData);
    }

    return (
        <div>
            Registry
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                Text input: <input type='text' value={textInput} onChange={(e)=>{setTextInput(e.target.value)}}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            {error? <span style={{color:'red'}}>Error occured</span>:null}
            {
                registryData.map((el,i)=>{
                    return(
                        <div key={i}>
                            {el}
                            <input type='button' value='remove' onClick={()=>{removeItem(i)}} />
                            <input type='button' value='edit' onClick={()=>{editItem(i)}} />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Registry;