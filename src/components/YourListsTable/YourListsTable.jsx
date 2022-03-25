import { useState, useEffect } from "react";
import * as listService from '../../services/listService'

const YourListsTable = (props) => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    if (props.profile !== undefined) {
      const profLists = listService
      .getUserLists(props.profile._id, (resJson) => {
        setLists(resJson)
      })
    }
  },[props])

  if (props.profile === undefined) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        <div>
          {lists.map(list => {
            return (
              <>
              {list.listName}
              </>
            )
          })}
        </div>
      </>
    );
  }
}

export default YourListsTable;