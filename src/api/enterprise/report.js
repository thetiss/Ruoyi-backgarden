import request from '@/utils/request';

// 查询菜单列表
export function listUsers() {
  return request({
    url: '/',
    method: 'get'
  });
}

export function listUsersWithParams(queryParams) {
  const validQueryParams = {
    page: queryParams.pageNum,
    per_page: queryParams.pageSize
  };
  // debugger;
  return request({
    url: '/',
    method: 'get',
    params: validQueryParams
  });
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/system/menu/',
    method: 'get'
  });
}
