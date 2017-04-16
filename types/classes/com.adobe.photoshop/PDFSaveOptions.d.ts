/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a pdf document */
		class PDFSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/** save annotations */
			public annotations: boolean;
			/** convert the color profile to a destination profile */
			public colorConversion: boolean;
			/**
			 * converts a 16-bit image to 8-bit for better compatibility 
			 * with other applications
			 */
			public convertToEightBit: boolean;
			/** description of the save options in use */
			public description: string;
			/**
			 * describes the final RGB or CMYK output device, such as your 
			 * monitor or a certain press standard
			 */
			public destinationProfile: string;
			/**
			 * DEPRECATED, no longer used in CS2 ( should the embedded 
			 * color profile be downgraded to version 2 )
			 */
			public downgradeColorProfile: boolean;
			/** down sample method to use */
			public downSample: Adobe.Photoshop.PDFResample;
			/**
			 * down sample images to this size if they exceed limit (in 
			 * pixels per inch)
			 */
			public downSampleSize: number;
			/**
			 * limits downsampleing/subsampling to images that exceed this 
			 * value (in pixels per inch)
			 */
			public downSampleSizeLimit: number;
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/**
			 * DEPRECATED, no longer used in CS2 ( embed fonts? Only valid 
			 * if a text layer is included )
			 */
			public embedFonts: boolean;
			/** Includes a small preview image in Acrobat */
			public embedThumbnail: boolean;
			/** ZIP, JPEG and JPEG2000 encoding and compression options */
			public encoding: Adobe.Photoshop.PDFEncoding;
			/**
			 * DEPRECATED, no longer used in CS2 ( use image interpolation? 
			 * )
			 */
			public interpolation: boolean;
			/**
			 * Only valid for JPEG encoding. Use encoding options instead 
			 * of this property. Quality of produced image. Only valid for 
			 * JPEG encoded PDF documents ( 0 - 12 )
			 */
			public jpegQuality: number;
			/** save layers */
			public layers: boolean;
			/** Improves performance of PDFs on Web servers */
			public optimizeForWeb: boolean;
			/**
			 * an optional comment field for inserting descriptions of the 
			 * output condition. The text is stored in the PDF/X file.
			 */
			public outputCondition: string;
			/** identifier for the output condition */
			public outputConditionID: string;
			/** PDF version to be compatible with */
			public PDFCompatibility: Adobe.Photoshop.PDFCompatibility;
			/** PDF Standard to be compatible with */
			public PDFStandard: Adobe.Photoshop.PDFStandard;
			/**
			 * Lets you reopen the PDF in Photoshop with native Photoshop 
			 * data intact
			 */
			public preserveEditing: boolean;
			/**
			 * preset file to use for settings, may override 'save as' 
			 * dialog settings
			 */
			public presetFile: string;
			/** shows which profiles to include */
			public profileInclusionPolicy: boolean;
			/** URL where the output condition is registered */
			public registryName: string;
			/** save spot colors */
			public spotColors: boolean;
			/** compression option supported only with JPEG2000 compression */
			public tileSize: number;
			/** DEPRECATED, no longer used in CS2 */
			public transparency: boolean;
			/**
			 * DEPRECATED, no longer used in CS2 ( use outlines for text? 
			 * Only valid if vector data is included )
			 */
			public useOutlines: boolean;
			/** DEPRECATED, no longer used in CS2 ( include vector data ) */
			public vectorData: boolean;
			/** Opens the saved PDF in Acrobat */
			public view: boolean;
		}
	}
}