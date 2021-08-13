import {useCallback, useState} from 'react';
import {launchCamera, CameraOptions} from 'react-native-image-picker';

const imageConf: CameraOptions = {
  mediaType: 'photo',
  quality: 0.5,
  includeBase64: true,
};

export default function useCamera() {
  const [image, setImage] = useState<any>(undefined);

  const onTakeSnap = useCallback(() => {
    launchCamera(imageConf, res => {
      const didCancel = res.didCancel;

      if (!didCancel) {
        const assets: any = res.assets;
        assets && setImage(assets[0]?.uri);
      }
    });
  }, []);

  return {onTakeSnap, image};
}
