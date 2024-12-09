import { useState, useEffect } from 'react';

interface PlatformInfo {
  isAndroid: boolean;
  isIOS: boolean;
  isMobileChrome: boolean;
  isMobileSafari: boolean;
}

export const usePlatformDetect = (): PlatformInfo => {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>({
    isAndroid: false,
    isIOS: false,
    isMobileChrome: false,
    isMobileSafari: false,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    setPlatformInfo({
      isAndroid: /android/.test(userAgent),
      isIOS: /iphone|ipad|ipod/.test(userAgent),
      isMobileChrome: /chrome/.test(userAgent) && /mobile/.test(userAgent),
      isMobileSafari: /safari/.test(userAgent) && /mobile/.test(userAgent),
    });
  }, []);

  return platformInfo;
};