import React, { Fragment } from "react";

const BelajarUseCallBack = (props) => {
  const [kelas, setKelas] = React.useState([]);
  const jumlahKelas = React.useCallback(() => {
    return ["X TKJ", "X RPL", "XI TKJ", "XI RPL", props.kelas];
  }, [props.kelas]);
  React.useEffect(() => {
    let data = jumlahKelas();
    setKelas(data);
    console.log("effect dipanggil");
  }, [jumlahKelas]);
  return (
    <Fragment>
      <h1>Banyaknya Kelas</h1>
      <ol>
        {kelas.map((kelas, index) => (
          <li key={index}>{kelas}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default BelajarUseCallBack;
