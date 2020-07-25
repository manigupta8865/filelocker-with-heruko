import React, { useEffect, useState } from "react";
import axios from "axios";
const FileDetails = () => {
  const [filesDetails, setFilesDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFile();
  }, []);
  const getFile = async () => {
   await axios.get("/details").then((res) => {
      setLoading(false);
      setFilesDetails(res.data);
      console.log(res.data);
      console.log(filesDetails);
    });
  };
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr className="Table-Heading">
            <th>FileName</th>
            <th>FilePath</th>
            <th>Custom File Name</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div>....loading</div>
          ) : (
            filesDetails.map((data) => (
              <tr className="Table-Data">
                <td>{data.FileName}</td>
                <td>{data.FilePath}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default FileDetails;
