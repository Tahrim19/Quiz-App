import { useEffect } from 'react';
import { useState } from 'react'

export default function FormCategory() {
    const [options , setOption] = useState(null)
    const [category, setCategory] = useState('');

    useEffect(()=>{
        const url = `https://opentdb.com/api_category.php`;
        fetch(url)
        .then((res)=>res.json())
        .then((response) => {
            setOption(response.trivia_categories)
        })
    },[])
    const handleSubmit = (e) => {
        setCategory(e.target.value)
    }
  return (
    <div className='input-container'>
    <h4>Select Category</h4>
    <select value={category} onChange={handleSubmit}>
    <option hidden>Category...</option>
    {
        options && options.map((option) => (
            <option value={option.id} key={option.id}>
                {option.name}
            </option>
        ))
    }
    </select>

    </div>
  )
}
