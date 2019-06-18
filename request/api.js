/**   
 * api接口统一管理
 */
import { get, post } from './http'

//导出接口
/*
 * 接口注释
 */
export const news = p => post('/toutiao/index', p);

/*
 * 接口注释
 */
export const mobile = p => get('/toutiao/index', p);
