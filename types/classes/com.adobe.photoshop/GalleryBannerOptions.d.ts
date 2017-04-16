/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery banner options */
		class GalleryBannerOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * web photo gallery contact info ( default:  )
			 * @type {string}
			 */
			public contactInfo: string;
			/**
			 * web photo gallery date ( default:  )
			 * @type {string}
			 */
			public date: string;
			/**
			 * the font setting for the banner text ( default: 
			 * GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * the size of the font for the banner text ( 1 - 7; default: 3 
			 * )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * web photo gallery photographer ( default:  )
			 * @type {string}
			 */
			public photographer: string;
			/**
			 * web photo gallery site name ( default: Adobe Web Photo 
			 * Gallery )
			 * @type {string}
			 */
			public siteName: string;
		}
	}
}