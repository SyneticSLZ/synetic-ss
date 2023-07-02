import "./new.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs,title}) => {

  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(data);
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {

        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
 


await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

};

  return (
    <div>
        <div className="top">
          <div className="h1">{title}</div>
        </div>
        <div className="bottom">
          <div className="left">
           <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className="img"/>
          </div>
          <div className="right">
            <form className="form" onSubmit={handleAdd}>
              <div className="formInput">
                {/* <div> */}
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file"  onChange={e =>setFile(e.target.files[0])} style={{ display: "none"}}/>
              </div>

              
                {/* <div className="formInput" >
                  <label>Username</label>
                  <input type="text" placeholder="john_doe"/>
                </div>
                <div className="formInput" >
                  <label>Name and surname</label>
                  <input type="text" placeholder="john doe"/>
                </div> */}
                {/* </div> */}
                {/* <div> */}
                {/* <div className="formInput" >
                  <label>Email</label>
                  <input type="email" placeholder="johndoe@gmail.com"/>
                </div>
              
                <div className="formInput" >
                  <label>Phone Number</label>
                  <input type="text" placeholder="+44 6876 "/>
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input type="password"/>
                </div> */}
                {/* </div> */}
                {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput}/>
                </div>
              ))}

              <button className="button" disabled={per !== null && per < 100} type="Submit">Send</button>
            </form>
          </div>
      </div>
      </div>
   
  );
};

export default New;