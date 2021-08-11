import {useState, useEffect} from 'react';
import {apiGetRandomJokes} from '../services/api';

export default function useList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any[]>([]);

  // Get List
  const onGetList = async () => {
    setLoading(true);

    await apiGetRandomJokes()
      .then((res: any) => {
        if (res) setData(res.data);
        else setError(true);
      })
      .catch(err => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    onGetList();
  }, []);

  return {onGetList, loading, error, data};
}
