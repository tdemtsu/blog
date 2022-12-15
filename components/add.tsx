import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage,db,auth} from '../firebaseConfig'

export default function AddArticle() {
    const[formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        date: Timestamp.now().toDate(),
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = () => {
      if (!formData.title || !formData.description || !formData.image) {
        alert("Please fill all the fields");
        return;
      }
    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (error) => {
        console.log(error);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          date: Timestamp.now().toDate(),
        });
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            date: Timestamp.now().toDate(),
          })
            .then(() => {
              console.log('works')
            })
        });
      }
    );
  };
  return (
    <div className="w-3/5 p-4 pb-12">
      <h1 className="flex justify-center font-bold text-black text-4xl hover:underline leading-10 pb-8">Create Your Own Blog Post</h1>
      <div className="rounded bg-slate-100 shadow p-6">
        {/* Title */}
        <div className="pb-8">
            <label  htmlFor="" className="font-semibold text-2xl text-gray-600 block">Title</label>
            <input type="text" name="title" value={formData.title} onChange={(e)=>handleChange(e)}  placeholder="Make it Creative"
            className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border border-2 rounded-r px-4 py-2 w-full"/>
        </div>
        {/* Description */}
        <div className="pb-6">
          <label htmlFor="" className="font-semibold text-gray-700 block pb-1">Description</label>
          <textarea name="description" value={formData.description} onChange={(e)=>handleChange(e)}  placeholder="Give me details..."  
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded border border-2 rounded-r px-4 py-2 w-full h-20">
          </textarea>
        </div>
        {/* image */}
         <div className="pb-7">
            <label htmlFor="" className="font-semibold text-gray-700 block pb-1">Image</label>
            <input type="file" name="image" accept='image/*' onChange={(e)=>handleImageChange(e)} placeholder="Insert Text Here..." className="border border-2 rounded-r px-4 py-2 w-full" />
         </div>
        {/* button */}
        <button 
        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded bg-blue-600 text-white hover:bg-blue-600 mt-2" 
        onClick={handlePublish}>Publish
        </button>
        </div>
      </div>


  )
}
