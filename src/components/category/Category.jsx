import { useNavigate } from "react-router";

const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/10150/10150793.png",
    name: "CSE",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/389/389493.png",
    name: "Mechanical",
  },

  {
    image: "https://cdn-icons-png.flaticon.com/128/3500/3500690.png",
    name: "Story",
  },

  {
    image: "https://cdn-icons-png.flaticon.com/128/2276/2276360.png",
    name: "Civil",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2249/2249539.png",
    name: "Math",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/675/675795.png",
    name: "Electronics",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex justify-center  ">
          <div className="flex ">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className="  w-24 h-24 max-w-xs rounded-full  bg-cyan-500 transition-all hover:bg-blue-500 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12 p-4">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
