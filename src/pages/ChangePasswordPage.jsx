import SubLayout from "../components/layout/SubLayout";
import ChangePassword from "../components/account/ChangePassword";
import { motion } from "framer-motion";

const ChangePasswordPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateX(100%)' }}
      animate={{ opacity: 1, transform: 'translateX(0)' }}
      transition={{ duration: 0.3 }}
    >
      <SubLayout pageTitle="비밀번호 변경">
        <ChangePassword />
      </SubLayout>
    </motion.div>
  );
};

export default ChangePasswordPage;
