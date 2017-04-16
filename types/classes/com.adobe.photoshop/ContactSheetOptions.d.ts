/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the Contact Sheet command */
		class ContactSheetOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * place the images horizontally first ( default: true )
			 * @type {boolean}
			 */
			public acrossFirst: boolean;
			/**
			 * rotate images for best fit ( default: false )
			 * @type {boolean}
			 */
			public bestFit: boolean;
			/**
			 * use the filename as a caption for the image ( default: true 
			 * )
			 * @type {boolean}
			 */
			public caption: boolean;
			/**
			 * contact sheet columns ( default: 5 )
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * flatten all layers in the final document ( default: true )
			 * @type {boolean}
			 */
			public flatten: boolean;
			/**
			 * font used for the caption ( default: GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * font size used for the caption ( default: 12 )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * height of the resulting document in pixels ( default: 720 )
			 * @type {number}
			 */
			public height: number;
			/**
			 * horizontal spacing between images in pixels ( default: 1 )
			 * @type {number}
			 */
			public horizontal: number;
			/**
			 * document mode (Grayscale, RGB, CMYK or Lab) ( default: 
			 * NewDocumentMode.RGB )
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 */
			public mode: Adobe.Photoshop.NewDocumentMode;
			/**
			 * the resolution of the document (in pixels per inch) ( 
			 * default: 72.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * contact sheet rows ( default: 6 )
			 * @type {number}
			 */
			public rowCount: number;
			/**
			 * auto space the images in the contact sheet ( default: true )
			 * @type {boolean}
			 */
			public useAutoSpacing: boolean;
			/**
			 * vertical spacing between images in pixels ( default: 1 )
			 * @type {number}
			 */
			public vertical: number;
			/**
			 * width of the resulting document in pixels ( default: 576 )
			 * @type {number}
			 */
			public width: number;
		}
	}
}