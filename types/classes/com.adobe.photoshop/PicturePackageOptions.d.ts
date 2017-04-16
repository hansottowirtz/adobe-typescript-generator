/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** options for the Picture Package command */
		class PicturePackageOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * content information ( default: PicturePackageTextType.NONE )
			 * @type {Adobe.Photoshop.PicturePackageTextType}
			 */
			public content: Adobe.Photoshop.PicturePackageTextType;
			/**
			 * flatten all layers in the final document ( default: true )
			 * @type {boolean}
			 */
			public flatten: boolean;
			/**
			 * font used for the text ( default: GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * font size used for the caption ( default: 12 )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * layout to use to generate the picture package ( default: 
			 * (2)5x7 )
			 * @type {string}
			 */
			public layout: string;
			/**
			 * document mode (Grayscale, RGB, CMYK or Lab) ( default: 
			 * NewDocumentMode.RGB )
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 */
			public mode: Adobe.Photoshop.NewDocumentMode;
			/**
			 * web page security opacity as a percent ( default: 100 )
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * the resolution of the document (in pixels per inch) ( 
			 * default: 72.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * picture package custom text ( default:  )
			 * @type {string}
			 */
			public text: string;
			/**
			 * text color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public textColor: Adobe.Photoshop.RGBColor;
			/**
			 * text position ( default: 
			 * GallerySecurityTextPositionType.CENTERED )
			 * @type {Adobe.Photoshop.GallerySecurityTextPositionType}
			 */
			public textPosition: Adobe.Photoshop.GallerySecurityTextPositionType;
			/**
			 * text rotate ( default: GallerySecurityTextRotateType.ZERO )
			 * @type {Adobe.Photoshop.GallerySecurityTextRotateType}
			 */
			public textRotate: Adobe.Photoshop.GallerySecurityTextRotateType;
		}
	}
}