import YourListsTable from "../../components/YourListsTable/YourListsTable";

const YourLists = (props) => {
  return (
    <>
      <YourListsTable profile={props.profile} />
    </>
  );
}

export default YourLists;