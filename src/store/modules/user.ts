import { defineStore } from "pinia";
import { loginFrom } from "../../api/user/type";
let useUserStore = defineStore("User", {
  state: () => {
    return {
      token: localStorage.getItem("token"),
    };
  },
  actions: {
    // 登录
    userLogin(loginFrom: loginFrom) {
      console.log("login", loginFrom);
      localStorage.setItem("token", "token");
      return "ok";
    },
  },
  getters: {},
});

export default useUserStore;
