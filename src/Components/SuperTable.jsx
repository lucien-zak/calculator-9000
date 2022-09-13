import React from 'react'
import "./Styles/SuperTable.css";


function SuperTable({data, setDeleteState, deleteState}) {

    const clearBdd = async (id) => {
        await fetch("delete.php", {
            method: "POST",
            body: JSON.stringify({ id: id }),
        })
        setDeleteState(!deleteState);
    }

  return (
    <>
    <table style={{
        border: "1px solid black",
        borderCollapse: "collapse",
        textAlign: "center",
        overflow: "scroll",
    }}>
        <thead>
            <tr>
                <th>Calcul</th>
                <th>Résultat</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.operations.replace('=','')}</td>
                        <td>{item.results}</td>
                        <td onClick={() => {
                            clearBdd(item.id_calcul)
                        }} style={{color: "red", cursor: 'pointer'}}>X</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      </>
  )
}

export default SuperTable