import React, { useEffect, useState } from "react";
import axios from "axios";
import Gif from "./Gif";
import ReactPaginate from "react-paginate";

const Main = ({ newValue }) => {
  const [gif, setGif] = useState([]);
  const [clonedGifs, setClonedGifs] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);

  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(clonedGifs.length / userPerPage);

  useEffect(() => {
    setClonedGifs(
      newValue.trim()
        ? gif.filter((val) =>
            val.title.toLowerCase().includes(newValue.trim().toLowerCase())
          )
        : gif
    );
  }, [newValue, gif.length]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY"
      );
      setGif(response.data.data);
      setClonedGifs(response.data.data);
    }
    fetchData();
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUser = clonedGifs
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((ele, index) => {
      return <Gif newData={ele} key={index} />;
    });

  return (
    <div className="container">
      {displayUser}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paiginationBttns"}
        previousLinkClassName={"previouseBttns"}
        nextLinkClassName={"nextBttns"}
        disabledClassName={"paginationDisable"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Main;
