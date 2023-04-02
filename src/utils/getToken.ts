import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

export default function GetToken() {
  const token = Cookies.get('accessToken');
  return token;
}
