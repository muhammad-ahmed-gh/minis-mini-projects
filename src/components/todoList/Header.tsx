import Container from "../UI/Container";

export default function TodoListHeader() {
  return (
    <header>
      <Container className="py-[20px_10px] flex justify-between items-center">
        <h2 className="text-[35px] md:text-[40px] font-[600] capitalize">My tasks 📝</h2>
        <div className="flex items-center gap-[15px] sm:gap-[30px] text-text-color-light">
          <div className="cursor-pointer">
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="cursor-pointer">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </Container>
    </header>
  );
}
