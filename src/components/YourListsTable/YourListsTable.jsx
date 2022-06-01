import { useState, useEffect } from "react";
import * as listService from '../../services/listService'
import { Link } from 'react-router-dom'

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
                <Link
                  to={`/lists/${list._id}`}
                  state={list}
                >
                  {list.listName}
                </Link>
              </>
            )
          })}
        </div>
      </>
    );
  }
}

export default YourListsTable;