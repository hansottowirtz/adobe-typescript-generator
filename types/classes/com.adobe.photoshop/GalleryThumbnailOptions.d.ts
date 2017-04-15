/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GalleryThumbnailOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the amount of border pixels you want around your thumbnail 
			 * images ( 0 - 99; default: 0 )
			 */
			public border: number;
			/** with caption ( default: false ) */
			public caption: boolean;
			/** web photo gallery thumbnail columns ( default: 5 ) */
			public columnCount: number;
			/**
			 * web photo gallery thumbnail dimension in pixels ( default: 
			 * 75 )
			 */
			public dimension: number;
			/** web photo gallery font ( default: GalleryFontType.ARIAL ) */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * the size of the font for the thumbnail images text ( 1 - 7; 
			 * default: 3 )
			 */
			public fontSize: number;
			/** include copyright for thumbnail ( default: false ) */
			public includeCopyright: boolean;
			/** include credits for thumbnail ( default: false ) */
			public includeCredits: boolean;
			/** include file name for thumbnail ( default: false ) */
			public includeFilename: boolean;
			/** include title for thumbnail ( default: false ) */
			public includeTitle: boolean;
			/** web photo gallery thumbnail rows ( default: 3 ) */
			public rowCount: number;
			/**
			 * the size of the thumbnail images ( default: 
			 * GalleryThumbSizeType.MEDIUM )
			 */
			public size: Adobe.Photoshop.GalleryThumbSizeType;
		}
	}
}