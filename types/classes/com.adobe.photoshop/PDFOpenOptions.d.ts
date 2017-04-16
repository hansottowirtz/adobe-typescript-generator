/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a generic PDF document */
		class PDFOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * use antialias?
			 * @type {boolean}
			 */
			public antiAlias: boolean;
			/**
			 * number of bits per channel
			 * @type {Adobe.Photoshop.BitsPerChannelType}
			 */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/**
			 * DEPRECATED, no longer used in CS2 ( constrain proportions of 
			 * image )
			 * @type {boolean}
			 */
			public constrainProportions: boolean;
			/**
			 * crop the page
			 * @type {Adobe.Photoshop.CropToType}
			 */
			public cropPage: Adobe.Photoshop.CropToType;
			/**
			 * DEPRECATED, no longer used in CS2  ( height of image (unit 
			 * value) )
			 * @type {any}
			 */
			public height: any;
			/**
			 * the document mode
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 */
			public mode: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * name of the new document
			 * @type {string}
			 */
			public name: string;
			/**
			 * number of page or image to open
			 * @type {number}
			 */
			public page: number;
			/**
			 * the resolution of the document (in pixels per inch)
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * supress any warnings that may occur during opening
			 * @type {boolean}
			 */
			public suppressWarnings: boolean;
			/**
			 * page property refers to page number, if false page property 
			 * refers to image number
			 * @type {boolean}
			 */
			public usePageNumber: boolean;
			/**
			 * DEPRECATED, no longer used in CS2  ( width of image (unit 
			 * value) )
			 * @type {any}
			 */
			public width: any;
		}
	}
}