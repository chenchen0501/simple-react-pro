import { queryCurrent, query as queryUsers, getRoutes } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    currentRoutes: [], // 当前权限路由
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },

    *getRoutes(_, { call, put }) {
      const res = yield call(getRoutes);
      yield put({
        type: 'saveRoutes',
        payload: res,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },

    saveRoutes(state, action) {
      return { ...state, currentRoutes: action.payload };
    },
  },
};
export default UserModel;
