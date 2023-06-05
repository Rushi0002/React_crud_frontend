import React,{useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookEdit = () => {
  const {id} = useParams();
  // const[data,changeData] = useState({});

  const navigate = useNavigate();

 

  const[title,setTitle] = useState("");
  const[author,setAuthor] = useState("");
  const[confirm,setConfirm]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(confirm===true){
        await axios.put("http://localhost:5000/books/"+id,{id,title,author})
        alert("saved successfully");
        navigate("/");
    }
    else{
        alert("Please select confirm checkbox");
    }
  };

  const LoadBooks = async () => {
    const result = await axios.get("http://localhost:5000/books/"+id);
    setTitle(result.data.title);
    setAuthor(result.data.author);
  }

  useEffect(()=>{
    LoadBooks();
  },[]);

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='card' style={{"textAlign":"left"}}>
                    <div className='card-title'>
                        <h2>Edit Book Details</h2>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Id</label>
                                    <input value={id} disabled='disabled' className='form-control'/>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Book Name</label>
                                    <input value={title} onChange={e=>setTitle(e.target.value)}  className='form-control' required/>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Author</label>
                                    <input value={author} onChange={e=>setAuthor(e.target.value)} className='form-control' required/>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-check'>
                                    <input checked={confirm} onChange={e=>setConfirm(e.target.checked)} type='checkbox' className='form-check-input'/>
                                    <label className='form-check-label'>Confirm save changes</label>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button className='btn btn-success' type='submit'>Save</button>
                                    <Link to='/' className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default BookEdit
