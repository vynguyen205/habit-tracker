import { useAtom } from 'jotai'
import { userAtom } from '../../state'

const TagList = () => {
    const [user, setUser] = useAtom(userAtom)


    // Show habits for a logged in user
    return (
        <>
            {user === null ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <ul>
                        {user?.userTag?.map((data) =>
                        (<li key={data?._id}>
                            <div>
                                <p>{data?.tagName}</p>
                                <p>{data?.tagDescription}</p>
                                <p>{data?.tagCompleted}</p>
                            </div>
                        </li>)
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}
// const TagList = () => {


// Show habits for a logged in user
//     return (
//         <>
//             {data.map((data) => 
//             (<h3 key={data._id}>{data.tagName},
//             {data.tagHabit}</h3>)
//             )}
//         </>
//     )
// }

// export default TagList;
