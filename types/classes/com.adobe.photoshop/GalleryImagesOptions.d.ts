/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery images */
		class GalleryImagesOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the amount of border pixels you want between your images ( 0 
			 * - 99; default: 0 )
			 */
			public border: number;
			/** generate a caption for the images ( default: false ) */
			public caption: boolean;
			/** resized image dimensions in pixels ( default: 350 ) */
			public dimension: number;
			/**
			 * font for the gallery images text ( default: 
			 * GalleryFontType.ARIAL )
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/** font size for the gallery images text ( 1 - 7; default: 3 ) */
			public fontSize: number;
			/**
			 * the quality setting for the JPEG image ( 0 - 12; default: 5 
			 * )
			 */
			public imageQuality: number;
			/**
			 * include the copyright in the text for the gallery images ( 
			 * default: false )
			 */
			public includeCopyright: boolean;
			/**
			 * include the credits in the text for the gallery images ( 
			 * default: false )
			 */
			public includeCredits: boolean;
			/**
			 * include the file name in the text for the gallery images ( 
			 * default: true )
			 */
			public includeFilename: boolean;
			/**
			 * include the title in the text for the gallery images ( 
			 * default: false )
			 */
			public includeTitle: boolean;
			/** add numeric links ( default: true ) */
			public numericLinks: boolean;
			/**
			 * how should the image be constrained ( default: 
			 * GalleryConstrainType.CONSTRAINBOTH )
			 */
			public resizeConstraint: Adobe.Photoshop.GalleryConstrainType;
			/** resize images data ( default: true ) */
			public resizeImages: boolean;
		}
	}
}