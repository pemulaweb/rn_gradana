import {useEffect, useState} from 'react';
import {
  apiGetDistricts,
  apiGetProvince,
  apiGetRegencies,
} from '../services/api';

interface ISelected {
  province: any;
  regency: any;
  district: any;
}

export default function useWilayah() {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [regencies, setRegencies] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);

  const [selected, setSelected] = useState<ISelected>({
    province: undefined,
    regency: undefined,
    district: undefined,
  });

  // Get Province
  const onGetProvince = async () => {
    await apiGetProvince().then(res => {
      if (res) {
        setProvinces(res?.data);
        setRegencies([]);
        setDistricts([]);
      }
    });
  };

  // Get Regencies
  const onGetRegencies = async (item: any) => {
    const id = item?.id;
    setSelected({...selected, province: item});

    await apiGetRegencies(id).then(res => {
      if (res) {
        setRegencies(res?.data);
        setDistricts([]);
      }
    });
  };

  // Get Districts
  const onGetDistricts = async (item: any) => {
    const id = item?.id;
    setSelected({...selected, regency: item});

    await apiGetDistricts(id).then(res => {
      if (res) setDistricts(res?.data);
    });
  };

  // Select District
  const onSelectDistrict = (item: any) =>
    setSelected({...selected, district: item});

  useEffect(() => {
    onGetProvince();
  }, []);

  return {
    provinces,
    regencies,
    districts,
    onGetRegencies,
    onGetDistricts,
    onSelectDistrict,
    selected,
  };
}
