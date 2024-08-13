const CustomList = ({ list }) => {
    return (
      <ol>
        {list.map((eachLi, index) => (
          <li key={index}>{eachLi}</li>
        ))}
      </ol>
    );
  };
  
  export default CustomList;
  