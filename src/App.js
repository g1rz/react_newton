import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { getCookie, setCookie } from './service/cookie';

import Post from './components/Post/Post';
import Pagination from './components/Pagination/Pagination';

function App() {
    const [posts, setPosts] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [page, setPage] = React.useState(1);

    let location = useLocation();

    React.useEffect(() => {
        if (!getCookie('favorites')) {
            setCookie('favorites', []);
        } else {
            setFavorites(
                getCookie('favorites')
                    .split(',')
                    .filter((el) => el !== '')
                    .map((el) => Number(el)),
            );
        }
    }, []);

    React.useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            .then(({ data }) => {
                setPosts(data);
            })
            .catch((error) => console.log(error));
        window.scrollTo(0, 0);
    }, [page]);

    React.useEffect(() => {
        const pageNum = new URLSearchParams(location.search).get('page');
        if (pageNum) {
            setPage(Number(pageNum));
        }
    }, [location]);

    const onChangeFavorite = (id, mode = 'add') => {
        let newFavorites;
        if (mode === 'add') {
            newFavorites = [...favorites, id];
        }
        if (mode === 'remove') {
            newFavorites = favorites.filter((item) => item !== id);
        }
        setFavorites(newFavorites);
        setCookie('favorites', newFavorites);
    };

    const postsList = posts.map((post) => {
        return (
            <div key={post.id} className="col">
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    isFavorite={favorites.includes(post.id)}
                    onChangeFavorite={onChangeFavorite}
                />
            </div>
        );
    });

    return (
        <div className="app">
            <div className="container">
                <h1>Test work for Newton.finance</h1>
                <Pagination page={page} />
                <div className="row">{postsList}</div>
                <Pagination page={page} />
            </div>
        </div>
    );
}

export default App;
