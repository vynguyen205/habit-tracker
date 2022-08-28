import { useAtom } from 'jotai'
import { userAtom } from '../../state'

const TagList = () => {


// Show habits for a logged in user
    return (
        <>
            {data.map((data) => 
            (<h3 key={data._id}>{data.tagName},
            {data.tagHabit}</h3>)
            )}
        </>
    )
}

export default TagList;
