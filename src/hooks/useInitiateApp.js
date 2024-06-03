import { useState, useEffect } from 'react';
import axios from 'axios';

const useInitiateApp = () => {
  const [filters, setFilters] = useState({ title: '', albumTitle: '', userEmail: '' });
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://relish-project-de101f4ddaf6.herokuapp.com/externalapi/photos`,
          headers: {}
        };

        const response = await axios.request(config);
        console.log("Respuesta", JSON.stringify(response.data));
        setData(response.data.data);
        setFilteredData(response.data.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  useEffect(() => {
    const filtered = data.filter(item => {
      const titleMatch = item.title.toLowerCase().includes((filters.title || '').toLowerCase());
      const albumTitleMatch = item.album.title.toLowerCase().includes((filters.albumTitle || '').toLowerCase());
      const emailMatch = item.album.user.email.toLowerCase().includes((filters.userEmail || '').toLowerCase());
      return titleMatch && albumTitleMatch && emailMatch;
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [filters, data]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return { filteredData, handleFilterChange, currentPage, itemsPerPage, paginate };
};

export default useInitiateApp;
