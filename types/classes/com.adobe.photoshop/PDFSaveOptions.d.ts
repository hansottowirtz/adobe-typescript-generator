/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a pdf document */
		class PDFSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * save annotations
			 * @type {boolean}
			 */
			public annotations: boolean;
			/**
			 * convert the color profile to a destination profile
			 * @type {boolean}
			 */
			public colorConversion: boolean;
			/**
			 * converts a 16-bit image to 8-bit for better compatibility 
			 * with other applications
			 * @type {boolean}
			 */
			public convertToEightBit: boolean;
			/**
			 * description of the save options in use
			 * @type {string}
			 */
			public description: string;
			/**
			 * describes the final RGB or CMYK output device, such as your 
			 * monitor or a certain press standard
			 * @type {string}
			 */
			public destinationProfile: string;
			/**
			 * DEPRECATED, no longer used in CS2 ( should the embedded 
			 * color profile be downgraded to version 2 )
			 * @type {boolean}
			 */
			public downgradeColorProfile: boolean;
			/**
			 * down sample method to use
			 * @type {Adobe.Photoshop.PDFResample}
			 */
			public downSample: Adobe.Photoshop.PDFResample;
			/**
			 * down sample images to this size if they exceed limit (in 
			 * pixels per inch)
			 * @type {number}
			 */
			public downSampleSize: number;
			/**
			 * limits downsampleing/subsampling to images that exceed this 
			 * value (in pixels per inch)
			 * @type {number}
			 */
			public downSampleSizeLimit: number;
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * DEPRECATED, no longer used in CS2 ( embed fonts? Only valid 
			 * if a text layer is included )
			 * @type {boolean}
			 */
			public embedFonts: boolean;
			/**
			 * Includes a small preview image in Acrobat
			 * @type {boolean}
			 */
			public embedThumbnail: boolean;
			/**
			 * ZIP, JPEG and JPEG2000 encoding and compression options
			 * @type {Adobe.Photoshop.PDFEncoding}
			 */
			public encoding: Adobe.Photoshop.PDFEncoding;
			/**
			 * DEPRECATED, no longer used in CS2 ( use image interpolation? 
			 * )
			 * @type {boolean}
			 */
			public interpolation: boolean;
			/**
			 * Only valid for JPEG encoding. Use encoding options instead 
			 * of this property. Quality of produced image. Only valid for 
			 * JPEG encoded PDF documents ( 0 - 12 )
			 * @type {number}
			 */
			public jpegQuality: number;
			/**
			 * save layers
			 * @type {boolean}
			 */
			public layers: boolean;
			/**
			 * Improves performance of PDFs on Web servers
			 * @type {boolean}
			 */
			public optimizeForWeb: boolean;
			/**
			 * an optional comment field for inserting descriptions of the 
			 * output condition. The text is stored in the PDF/X file.
			 * @type {string}
			 */
			public outputCondition: string;
			/**
			 * identifier for the output condition
			 * @type {string}
			 */
			public outputConditionID: string;
			/**
			 * PDF version to be compatible with
			 * @type {Adobe.Photoshop.PDFCompatibility}
			 */
			public PDFCompatibility: Adobe.Photoshop.PDFCompatibility;
			/**
			 * PDF Standard to be compatible with
			 * @type {Adobe.Photoshop.PDFStandard}
			 */
			public PDFStandard: Adobe.Photoshop.PDFStandard;
			/**
			 * Lets you reopen the PDF in Photoshop with native Photoshop 
			 * data intact
			 * @type {boolean}
			 */
			public preserveEditing: boolean;
			/**
			 * preset file to use for settings, may override 'save as' 
			 * dialog settings
			 * @type {string}
			 */
			public presetFile: string;
			/**
			 * shows which profiles to include
			 * @type {boolean}
			 */
			public profileInclusionPolicy: boolean;
			/**
			 * URL where the output condition is registered
			 * @type {string}
			 */
			public registryName: string;
			/**
			 * save spot colors
			 * @type {boolean}
			 */
			public spotColors: boolean;
			/**
			 * compression option supported only with JPEG2000 compression
			 * @type {number}
			 */
			public tileSize: number;
			/**
			 * DEPRECATED, no longer used in CS2
			 * @type {boolean}
			 */
			public transparency: boolean;
			/**
			 * DEPRECATED, no longer used in CS2 ( use outlines for text? 
			 * Only valid if vector data is included )
			 * @type {boolean}
			 */
			public useOutlines: boolean;
			/**
			 * DEPRECATED, no longer used in CS2 ( include vector data )
			 * @type {boolean}
			 */
			public vectorData: boolean;
			/**
			 * Opens the saved PDF in Acrobat
			 * @type {boolean}
			 */
			public view: boolean;
		}
	}
}