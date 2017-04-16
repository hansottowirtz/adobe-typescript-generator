/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery thumbnail creation */
		class GalleryThumbnailOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the amount of border pixels you want around your thumbnail 
			 * images ( 0 - 99; default: 0 )
			 * @type {number}
			 */
			public border: number;
			/**
			 * with caption ( default: false )
			 * @type {boolean}
			 */
			public caption: boolean;
			/**
			 * web photo gallery thumbnail columns ( default: 5 )
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * web photo gallery thumbnail dimension in pixels ( default: 
			 * 75 )
			 * @type {number}
			 */
			public dimension: number;
			/**
			 * web photo gallery font ( default: GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * the size of the font for the thumbnail images text ( 1 - 7; 
			 * default: 3 )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * include copyright for thumbnail ( default: false )
			 * @type {boolean}
			 */
			public includeCopyright: boolean;
			/**
			 * include credits for thumbnail ( default: false )
			 * @type {boolean}
			 */
			public includeCredits: boolean;
			/**
			 * include file name for thumbnail ( default: false )
			 * @type {boolean}
			 */
			public includeFilename: boolean;
			/**
			 * include title for thumbnail ( default: false )
			 * @type {boolean}
			 */
			public includeTitle: boolean;
			/**
			 * web photo gallery thumbnail rows ( default: 3 )
			 * @type {number}
			 */
			public rowCount: number;
			/**
			 * the size of the thumbnail images ( default: 
			 * GalleryThumbSizeType.MEDIUM )
			 * @type {Adobe.Photoshop.GalleryThumbSizeType}
			 */
			public size: Adobe.Photoshop.GalleryThumbSizeType;
		}
	}
}