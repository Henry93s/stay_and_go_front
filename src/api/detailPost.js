import axios from 'axios';

export const detailPost = async ({nanoid}) => {
    try {
        const res = await axios.get(`/post/read/${nanoid}`, {
            withCredentials: true // 쿠키를 포함시키기 위해 필요
        });
        return res;
    } catch (e) {
        alert(e.response?.data?.message);
        console.log(e);
        return;
    }
};