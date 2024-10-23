const Contacts = () => {
  return (
    <div className="text-center my-10">
      <h1 className="text-4xl font-bold m-2 p-2">Contact Us</h1>
      <div>
        <form>
          <input
            placeholder="email"
            className="border-black border-2 m-2 p-1 rounded-md"
          ></input>
          <input
            placeholder="message"
            className="border-black border-2 m-2 p-1 rounded-md"
          ></input>
          <button className="border-2 border-black m-2 p-1 rounded-md hover:bg-gray-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
