import Articles from './journal'
import AddArticle from './add'


export default function App() {
    return (
            <div className="container bg-sky-500/[.02] mx-auto sm:px-4">
                 <div className='flex flex-col flex-wrap'>
                     <div className="flex justify-center items-center pr-4 pl-4">
                        <AddArticle/>
                    </div>
                     <div className="flex justify-around items-center pr-4 pl-4">
                        <Articles/>
                     </div>
                </div>
              </div>
    )
}