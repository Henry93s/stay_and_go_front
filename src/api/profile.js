import axios from 'axios';

/** 유저 데이터 가져오기 (프로필, 개인정보 수정 페이지) */
export const fetchUserData = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/users/${id}`, {
            withCredentials: true // 쿠키를 포함시키기 위해 필요
        });
        return response.data;
    } catch (error) {
        console.error("유저의 데이터를 찾을 수 없습니다.", error);
        throw error;
    }
};

/** 회원 탈퇴 (프로필 페이지) */
export const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/users/delete`, {
            data: { email: id },
            withCredentials: true // 쿠키를 포함시키기 위해 필요
        });
    } catch (error) {
        console.error("회원 탈퇴에 실패했습니다.", error);
        throw error;
    }
};

/** 사용자 정보 수정 (개인정보 수정 페이지) */
export const editUserData = async (data) => {
    try {
        await axios.put(`http://localhost:3001/users`, data, {
            withCredentials: true // 쿠키를 포함시키기 위해 필요
        });
    } catch (error) {
        console.error("사용자 정보를 수정하는데 실패했습니다.", error);
        throw error;
    }
};
