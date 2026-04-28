import Container from "../UI/Container";

export default function TodoListHeader() {
  return (
    <header>
      <Container className="py-[10px] flex justify-between items-center">
        <h2 className="text-[40px] font-[600] capitalize">My tasks 📝</h2>
        <div className="flex items-center gap-[30px] text-text-color-light">
          <div className="cursor-pointer">
            <i className="fa-solid fa-pen-to-square text-inherit"></i>
          </div>
          <div className="cursor-pointer">
            <i className="fa-solid fa-ellipsis text-inherit"></i>
          </div>
        </div>
      </Container>
    </header>
  );
}
