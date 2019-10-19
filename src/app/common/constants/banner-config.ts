import { BannerImage } from '../dto/banner-image';
import { DeviceTypes } from './device-types';
import { I18n } from './i18n';

export const BannerConfig: Array<BannerImage> = [
        {
          bannerNo: 1,
          deviceTypes: [DeviceTypes[0], DeviceTypes[1]],
          bannerImageLocation: 'assets/images/banner/spring-background-3175322_1920.jpg',
          bannerTextCode: 'profile.banner.introduction',
          bannerTextStyle: 'text-top-center text-darkgreen'
        },
        {
          bannerNo: 4,
          deviceTypes: [DeviceTypes[0], DeviceTypes[1]],
          bannerImageLocation: 'assets/images/banner/banner-2143662_1920.jpg',
          bannerTextCode: 'profile.banner.quote2',
          bannerTextStyle: 'text-center  text-cornsilk'
        },
        {
          bannerNo: 2,
          deviceTypes: [DeviceTypes[0], DeviceTypes[1]],
          bannerImageLocation: 'assets/images/banner/geeks-2894621_1920.jpeg',
          bannerTextCode: 'profile.banner.experience',
          bannerTextStyle: 'text-left-center'
        },
        {
          bannerNo: 3,
          deviceTypes: [DeviceTypes[0], DeviceTypes[1]],
          bannerImageLocation: 'assets/images/banner/retro-3249927_1920.jpg',
          bannerTextCode: 'profile.banner.quote1',
          bannerTextStyle: 'text-center text-brown'
        }
      ];
