import axios from 'axios';  
import React, { useEffect, useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  

const FeaturedProperties = () => {  
  const [properties, setProperties] = useState([]);  
    const [selectedProperties, setSelectedProperties] = useState([]);  
    const [error, setError] = useState('');   
  const [loading, setLoading] = useState(true); // Added loading state  
  const navigate = useNavigate();  

  useEffect(() => {  
    const fetchProperties = async () => {   
      setLoading(true); // Start loading  
      try {  
        const response = await axios.get('http://localhost:81/api/Property/get-all-properties');  
        setProperties(response.data);
        //console.log(response.data); // Use 'data' from the response  
      } catch (err) {  
        console.error('Error fetching properties:', err);  
      } finally {  
        setLoading(false); // Stop loading  
      }  
    };  

    fetchProperties();  
  }, []);  

  const handleSelectProperty = (index) => {  
    if (selectedProperties.length < 3) {  
        setSelectedProperties((prev) => [...prev, properties[index]]);  
    } else {  
        setError('You can only select three properties');  
    }  
}; 
    

const handleSubmit = async () => {  
  try {  
      await axios.post('http://localhost:81/api/Property/set-featured-properties/', selectedProperties);  
      alert('Featured properties set successfully');  
  } catch (err) {  
      setError('Failed to set featured properties');  
      console.error(err);  
  }  
};  

  return (  
    <div>  
      <div className='flex flex-row justify-between items-center py-10'>  
        <h1 className='text-[20px] font-bold'>Featured Properties</h1>  
            {error && <p className="text-red-500">{error}</p>}  
        <Link to={'/home'}>  
          <button className='px-3 py-1 bg-green-500 text-white rounded-lg'>Back</button>  
        </Link>  
      </div>  
      <div className='flex flex-col'>  
        {loading ? ( // Conditional rendering for loading state  
          <p>Loading properties...</p>  
        ) : (  
          properties.map((property, index) => (  
            <div key={index} className='flex flex-row justify-between gap-10 border-t-4 border-b-4 py-5 '>  
              <div onClick={() => navigate(`/viewfeturedproperties/${property.propertyId}`)} className='max-w-[300px] hover:shadow-lg cursor-pointer'>  
                <img className='w-[100%]' src={property.image} alt={property.title} />  
              </div>  
              <div className='flex flex-row gap-10 items-center justify-between'>  
                <div className='flex flex-col gap-2'>  
                  <h1>{property.title}</h1>  
                  <p>{property.address}</p>  
                  <p>{property.description}</p>  
                </div>  
                
              </div> 
              
              <div>  
                <button  
                  className="bg-blue-500 text-white px-2 py-1 rounded"  
                  onClick={() => handleSelectProperty(index)}  
                  disabled={selectedProperties.includes(property)}  
              >  
                  {selectedProperties.includes(property) ? 'Selected' : 'Select'}  
                </button>  
              </div>   
            </div>  
          ))  
        )}  
      </div> 
      <button  
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"  
                onClick={handleSubmit}  
                disabled={selectedProperties.length < 3}  
            >  
                Submit Selected Properties  
            </button>   
    </div>  
  );  
};  

export default FeaturedProperties;