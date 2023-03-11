import React from "react";
import "./TableInbox.css";
// import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
// import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
// import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import Badge from "react-bootstrap/Badge";

const TableInbox = () => {
  
  const data = [
    {
      id: 1,
      status: (
        <Badge pill bg="success">
          Approved
        </Badge>
      ),
      approvedBy: "IC36690Swastik",
      fromPlace: "Bhubaneswar,India",
      toPlace: "Bengaluru,India",
      purpose: "travelling",
      dateUp: "2022-01-16",
    },
    {
      id: 2,
      status: (
        <Badge pill bg="danger">
          Rejected
        </Badge>
      ),
      approvedBy: "IC36691Suraj",
      fromPlace: "Bhubaneswar,India",
      toPlace: "Kolkata,India",
      purpose: "office work",
      dateUp: "2020-10-22",
    },
    {
      id: 3,
      status: (
        <Badge pill bg="warning">
          Pending
        </Badge>
      ),
      approvedBy: "IC36791Swasti",
      fromPlace: "Bhubaneswar,India",
      toPlace: "Chandigarh,India",
      purpose: "office work",
      dateUp: "2020-12-02",
    },
  ];
  return (
    <div className="mt-4 tableContainer">
      <table>
        <tr>
          <th>
            <PostAddIcon />
          </th>
          <th>Status</th>
          <th>Approved by</th>
          <th>From</th>
          <th>To</th>
          <th>Purpose of travel</th>
          <th>Date</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td></td>
              <td>{val.status}</td>
              <td>
                <PersonIcon />
                {val.approvedBy}
              </td>
              <td>{val.fromPlace}</td>
              <td>{val.toPlace}</td>
              <td>{val.purpose}</td>
              <td>{val.dateUp}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TableInbox;
