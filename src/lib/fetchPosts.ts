import axios from 'axios';
import type { Post } from '../types';

export async function fetchPosts() {
  // APIへの接続時間を擬似的に延長する
  await new Promise((r) => setTimeout(r, 500));

  return await axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.data.slice(0, 5));
}

export async function fetchPostById(postId: string) {
  // APIへの接続時間を擬似的に延長する
  await new Promise((r) => setTimeout(r, 500));

  return await axios
    .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data);
}
