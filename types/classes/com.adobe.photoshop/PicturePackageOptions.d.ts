/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PicturePackageOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * content information ( default: PicturePackageTextType.NONE )
			 */
			public content: Adobe.Photoshop.PicturePackageTextType;
			/** flatten all layers in the final document ( default: true ) */
			public flatten: boolean;
			/** font used for the text ( default: GalleryFontType.ARIAL ) */
			public font: Adobe.Photoshop.GalleryFontType;
			/** font size used for the caption ( default: 12 ) */
			public fontSize: number;
			/**
			 * layout to use to generate the picture package ( default: 
			 * (2)5x7 )
			 */
			public layout: string;
			/**
			 * document mode (Grayscale, RGB, CMYK or Lab) ( default: 
			 * NewDocumentMode.RGB )
			 */
			public mode: Adobe.Photoshop.NewDocumentMode;
			/** web page security opacity as a percent ( default: 100 ) */
			public opacity: number;
			/**
			 * the resolution of the document (in pixels per inch) ( 
			 * default: 72.0 )
			 */
			public resolution: number;
			/** picture package custom text ( default:  ) */
			public text: string;
			/** text color */
			public textColor: Adobe.Photoshop.RGBColor;
			/**
			 * text position ( default: 
			 * GallerySecurityTextPositionType.CENTERED )
			 */
			public textPosition: Adobe.Photoshop.GallerySecurityTextPositionType;
			/** text rotate ( default: GallerySecurityTextRotateType.ZERO ) */
			public textRotate: Adobe.Photoshop.GallerySecurityTextRotateType;
		}
	}
}