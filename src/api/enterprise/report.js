import request from '@/utils/request';

// 查询菜单列表
export function listUsers() {
  return request({
    url: '/',
    method: 'get'
  });
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/system/menu/',
    method: 'get'
  });
}
