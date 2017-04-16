/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery banner options */
		class GalleryBannerOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** web photo gallery contact info ( default:  ) */
			public contactInfo: string;
			/** web photo gallery date ( default:  ) */
			public date: string;
			/**
			 * the font setting for the banner text ( default: 
			 * GalleryFontType.ARIAL )
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * the size of the font for the banner text ( 1 - 7; default: 3 
			 * )
			 */
			public fontSize: number;
			/** web photo gallery photographer ( default:  ) */
			public photographer: string;
			/**
			 * web photo gallery site name ( default: Adobe Web Photo 
			 * Gallery )
			 */
			public siteName: string;
		}
	}
}