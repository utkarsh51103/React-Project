import Menuitem from "./Menuitem";

function Menulist({ list = [] }) {
  return (
    <ul className="list-none mt-0 mb-0">
      {list && list.length ? (
        list.map(listItem => <Menuitem item={listItem} />)
      ) : null}
    </ul>
  );
}

export default Menulist;


