import React, {useEffect, useState} from 'react'
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { Link } from "react-router-dom";
import DeleteArticle from './remove';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      const articleRef = collection(db, "Articles");
      const q = query(articleRef, orderBy("date", "desc"));
      onSnapshot(q, (snapshot) => {
        const articles = snapshot.docs.map((doc) => ({id: doc.id,...doc.data(), }));
        setArticles(articles);
      });
    }, []);
    
    return (
        <div>
            {/* Tailwind CSS Card styling came from User Artexx on Codepen.io https://codepen.io/artexxx/pen/QWyZKzy */}
            {/* Conditional Rendering below */}
            {articles.length > 0 ? (
                    articles.map(({id,title,description,imageUrl,date}) => (
                        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                            {/* card */}
                            <div className= "flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2" key={id}>
                                {/* media */}
                                <div className="h-auto w-auto md:w-2/3">
                                    <img className="inset-0 h-full w-full object-cover object-center" src={imageUrl} alt='title'/>
                                </div>
                                {/* Content */}
                                <div className="w-full py-4 px-6 text-gray-800 flex flex-col">
                                    <h3 className="font-bold text-3xl leading-tight truncate text-indigo-600 mb-2">{title}</h3>
                                    {/* issues with type never not being applicable when no posts are up */}
                                    <p className="text-grey-darker text-sm">{date.toDate().toDateString()}</p>
                                    <p className="text-gray-700 text-base pb-12 mt-2">{description} </p>
                                    <div className="flex justify-end">
                                        {/* type never not appicable to string assigned in firebase */}
                                        <DeleteArticle id={id} imageUrl={imageUrl} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No articles found!</p>
        )} 
        {/* Spacing between Footer */}
        <div className="mb-12"><br></br></div>
        <hr></hr>
        </div>     
  )
}
