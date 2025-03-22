import React, {useState} from "react";
import { GoogleMap, LoadScript, Autocomplete} from "@react-google-maps/api";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState(null);

    const handleSearch=(e)=>{
        e.preventDefault();
    };

  return (
    <div className="search">
        </div>
  )
}

export default Search