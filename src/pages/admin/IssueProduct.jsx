import { useContext, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Ensure you import the required Firebase functions
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "Mechanical",
  },
  {
    name: "CSE",
  },
  {
    name: "Story",
  },
  {
    name: "Religions",
  },
  {
    name: "Civil",
  },
  {
    name: "Electronics",
  },
];

const IssueProduct = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context; // Assuming fireDB is provided in the context

  const navigate = useNavigate();

  const [issueBooks, setIssueBooks] = useState({
    title: "",
    name: "",
    phone: "",
    category: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const IssueProductFunction = async () => {
    if (
      issueBooks.title === "" ||
      issueBooks.name === "" ||
      issueBooks.phone === ""
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const IssueRef = collection(fireDB, "issueBooks");
      await addDoc(IssueRef, issueBooks);
      toast.success("Book Borrowed successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Book Borrowed successfully");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {/* Form  */}
        <div className="login_Form bg-cyan-400 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-blue-900 ">
              Borrow Book
            </h2>
          </div>

          {/* Member Name Input */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Member Name"
              value={issueBooks.name}
              onChange={(e) => {
                setIssueBooks({ ...issueBooks, name: e.target.value });
              }}
              className="border text-blue-700  px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-500 "
            />
          </div>

          {/* Book Title Input */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book Title"
              name="title"
              value={issueBooks.title}
              onChange={(e) => {
                setIssueBooks({ ...issueBooks, title: e.target.value });
              }}
              className="border text-blue-700  px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-500 "
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Phone no"
              name="title"
              value={issueBooks.phone}
              onChange={(e) => {
                setIssueBooks({ ...issueBooks, phone: e.target.value });
              }}
              className="border text-blue-700  px-2 py-2 w-96 rounded-md outline-none placeholder-cyan-500 "
            />
          </div>

          {/* Product Category Select */}

          {/* Issue Product Button */}
          <div className="mb-3">
            <button
              onClick={IssueProductFunction}
              type="button"
              className="bg-cyan-600 hover:bg-blue-700 w-full text-white text-center py-2 font-bold rounded-md"
            >
              Borrowed Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueProduct;
