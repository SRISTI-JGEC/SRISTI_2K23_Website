import BounceLoader from "react-spinners/BounceLoader";
const Spinner = () => {
  return (
    <>
      <div className="w-full  h-screen flex justify-center items-center">
        <BounceLoader color="#d4d4d4" />
      </div>
    </>
  );
};

export default Spinner;
