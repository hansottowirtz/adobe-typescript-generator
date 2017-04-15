/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PDFOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** use antialias? */
			public antiAlias: boolean;
			/** number of bits per channel */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/**
			 * DEPRECATED, no longer used in CS2 ( constrain proportions of 
			 * image )
			 */
			public constrainProportions: boolean;
			/** crop the page */
			public cropPage: Adobe.Photoshop.CropToType;
			/**
			 * DEPRECATED, no longer used in CS2  ( height of image (unit 
			 * value) )
			 */
			public height: string;
			/** the document mode */
			public mode: Adobe.Photoshop.OpenDocumentMode;
			/** name of the new document */
			public name: string;
			/** number of page or image to open */
			public page: number;
			/** the resolution of the document (in pixels per inch) */
			public resolution: number;
			/** supress any warnings that may occur during opening */
			public suppressWarnings: boolean;
			/**
			 * page property refers to page number, if false page property 
			 * refers to image number
			 */
			public usePageNumber: boolean;
			/**
			 * DEPRECATED, no longer used in CS2  ( width of image (unit 
			 * value) )
			 */
			public width: string;
		}
	}
}