import { Link } from "react-router-dom";
import "../App.css";
import FormCreateUser from "../components/formCreateUser";
import Navbar from "../components/navbar";

export default function CreateUser() {
  //const [valueinputs, setValueinputs] = useState([]);
  const style_subtitle = "text-white mb-2 text-center text-base";
  const styleContainer = "my-4";
  return (
    <>
      <Navbar />
      <main
        className="w-full flex flex-col justify-center"
        style={{
          backgroundColor: "rgba(239, 239, 239, 1",
        }}
      >
        <section className="text-black font-semibold bg-black w-3/4 md:w-3/4 lg:w-3/5  flex flex-col content-center items-center gap-4  rounded-lg mx-auto my-6">
          <h2 className="text-white text-center text-2xl">Register</h2>
          <div className="w-1/2 ">
            <form>
              <FormCreateUser
                styleContainer={styleContainer}
                style_subtitle={style_subtitle}
              />
              <div className="flex flex-col content-center items-center">
                <Link
                  to={"/login"}
                  className="h-10 my-10  w-full lg:w-3/4  rounded-lg flex flex-col justify-center"
                  style={{ backgroundColor: "rgba(5, 29, 91, 1) " }}
                >
                  <button className="text-white w-full text-xl">
                    Create User
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
