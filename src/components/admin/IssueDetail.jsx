import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const IssueDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getIssueFunction, getIssue, setGetIssueBooks } =
    context;

  // Debugging: Check if getIssue data is populated
  useEffect(() => {
    console.log("getIssue:", getIssue);
  }, [getIssue]);

  // navigate
  const navigate = useNavigate();

  // Delete product
  const deleteBooks = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "issueBooks", id));
      toast.success("Borrowed Book Deleted ");
      getIssueFunction(); // Refresh the list after deletion
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className="text-xl text-purple-700 font-bold">Borrowed Books</h1>
        {/* Add Product Button  */}
        <Link to={"/issueproduct"}>
          <button className="px-5 py-2 bg-green-400 border text-white font-bold rounded-lg">
            Borrow
          </button>
        </Link>
      </div>

      {/* Loading  */}
      {loading && (
        <div className="flex justify-center relative top-20">
          <Loader />
        </div>
      )}

      {/* table  */}
      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Title
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Phone No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Date
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>

            {getIssue.map((item, index) => {
              const { id, name, title, phone, date } = item;
              return (
                <tr className="text-pink-300">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {index + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {name}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {phone}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {date}
                  </td>

                  <td
                    onClick={() => deleteBooks(id)}
                    className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-red-500 font-bold hover:cursor-pointer"
                  >
                    delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueDetail;
