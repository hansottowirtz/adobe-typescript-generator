/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ContactSheetOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** place the images horizontally first ( default: true ) */
			public acrossFirst: boolean;
			/** rotate images for best fit ( default: false ) */
			public bestFit: boolean;
			/**
			 * use the filename as a caption for the image ( default: true 
			 * )
			 */
			public caption: boolean;
			/** contact sheet columns ( default: 5 ) */
			public columnCount: number;
			/** flatten all layers in the final document ( default: true ) */
			public flatten: boolean;
			/**
			 * font used for the caption ( default: GalleryFontType.ARIAL )
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/** font size used for the caption ( default: 12 ) */
			public fontSize: number;
			/** height of the resulting document in pixels ( default: 720 ) */
			public height: number;
			/** horizontal spacing between images in pixels ( default: 1 ) */
			public horizontal: number;
			/**
			 * document mode (Grayscale, RGB, CMYK or Lab) ( default: 
			 * NewDocumentMode.RGB )
			 */
			public mode: Adobe.Photoshop.NewDocumentMode;
			/**
			 * the resolution of the document (in pixels per inch) ( 
			 * default: 72.0 )
			 */
			public resolution: number;
			/** contact sheet rows ( default: 6 ) */
			public rowCount: number;
			/**
			 * auto space the images in the contact sheet ( default: true )
			 */
			public useAutoSpacing: boolean;
			/** vertical spacing between images in pixels ( default: 1 ) */
			public vertical: number;
			/** width of the resulting document in pixels ( default: 576 ) */
			public width: number;
		}
	}
}