import { useState } from "react";
import useSWR from "swr";

const Search = () => {
    const [text, setText] = useState('');


    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const { data: users } = useSWR(`http://localhost:8081`, fetcher);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
          alertContext.setAlert(`Please don't leave it blank`, 'light');
        } else {
          githubContext.searchUsers(text);
          setText('');
        }
      };
    
      const onChange = (e) => {
        setText(e.target.value);
      };

      
        return (
          <div>
            <form onSubmit={onSubmit} className='form'>
              <input
                type='text'
                name='text'
                placeholder='Search Users'
                value={text}
                onChange={onChange}
              />
              <input
                type='submit'
                value='Search'
                className='btn btn-dark btn-block'
              />
            </form>
            {githubContext.users.length > 0 && (
              <button
                className='btn btn-light btn-block'
                onClick={githubContext.clearUsers}
              >
                Clear
              </button>
            )}
          </div>
        );
      };
  )
};

export default Search;
