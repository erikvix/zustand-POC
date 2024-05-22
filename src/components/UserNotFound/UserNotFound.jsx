import { useUserStore } from '../../store';
import './UserNotFound.css';

function UserNotFound() {
  const error = useUserStore((state) => state.error);
  return (
    <div className="error">
        <img src="/user-not-found.jpg" alt="error" width={300} height={200} />
        <strong>{error.message}</strong>
    </div>
  )
}
export default UserNotFound