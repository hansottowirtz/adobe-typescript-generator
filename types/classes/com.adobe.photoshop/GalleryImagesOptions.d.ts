/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery images */
		class GalleryImagesOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the amount of border pixels you want between your images ( 0 
			 * - 99; default: 0 )
			 * @type {number}
			 */
			public border: number;
			/**
			 * generate a caption for the images ( default: false )
			 * @type {boolean}
			 */
			public caption: boolean;
			/**
			 * resized image dimensions in pixels ( default: 350 )
			 * @type {number}
			 */
			public dimension: number;
			/**
			 * font for the gallery images text ( default: 
			 * GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * font size for the gallery images text ( 1 - 7; default: 3 )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * the quality setting for the JPEG image ( 0 - 12; default: 5 
			 * )
			 * @type {number}
			 */
			public imageQuality: number;
			/**
			 * include the copyright in the text for the gallery images ( 
			 * default: false )
			 * @type {boolean}
			 */
			public includeCopyright: boolean;
			/**
			 * include the credits in the text for the gallery images ( 
			 * default: false )
			 * @type {boolean}
			 */
			public includeCredits: boolean;
			/**
			 * include the file name in the text for the gallery images ( 
			 * default: true )
			 * @type {boolean}
			 */
			public includeFilename: boolean;
			/**
			 * include the title in the text for the gallery images ( 
			 * default: false )
			 * @type {boolean}
			 */
			public includeTitle: boolean;
			/**
			 * add numeric links ( default: true )
			 * @type {boolean}
			 */
			public numericLinks: boolean;
			/**
			 * how should the image be constrained ( default: 
			 * GalleryConstrainType.CONSTRAINBOTH )
			 * @type {Adobe.Photoshop.GalleryConstrainType}
			 */
			public resizeConstraint: Adobe.Photoshop.GalleryConstrainType;
			/**
			 * resize images data ( default: true )
			 * @type {boolean}
			 */
			public resizeImages: boolean;
		}
	}
}