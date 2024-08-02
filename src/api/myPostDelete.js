import axios from 'axios';

export const mypostDelete = async ({nanoid}) => {
    try {
        // post 에서는 axios 옵션이 3번째 인수에 넣지만
        // delete 요청에서는 axios 옵션을 2번째 옵션에 같이 넣는다 !
        const res = await axios.delete('http://localhost:3001/post/delete',{
            data: { nanoid },
            withCredentials: true // 쿠키를 포함시키기 위해 필요
        });
        return res;
    } catch (e) {
        alert(e.response?.data?.message);
        console.log(e);
        return;
    }
};