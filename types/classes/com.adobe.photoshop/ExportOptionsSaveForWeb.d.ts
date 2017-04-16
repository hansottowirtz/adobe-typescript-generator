/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to exporting Save For Web files */
		class ExportOptionsSaveForWeb extends Adobe.Photoshop.ExportOptions {
			/**
			 * apply blur to image to reduce artifacts ( default: 0.0 )
			 * @type {number}
			 */
			public blur: number;
			/**
			 * color reduction algorithm ( default: 
			 * ColorReductionType.SELECTIVE )
			 * @type {Adobe.Photoshop.ColorReductionType}
			 */
			public colorReduction: Adobe.Photoshop.ColorReductionType;
			/**
			 * number of colors in palette ( default: 256 )
			 * @type {number}
			 */
			public colors: number;
			/**
			 * type of dither ( default: Dither.DIFFUSION )
			 * @type {Adobe.Photoshop.Dither}
			 */
			public dither: Adobe.Photoshop.Dither;
			/**
			 * amount of dither. Only valid for diffusion ( default: 100 )
			 * @type {number}
			 */
			public ditherAmount: number;
			/**
			 * File format to use.  Note: Save For Web only supports 
			 * Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats. ( 
			 * default: SaveDocumentType.COMPUSERVEGIF )
			 * @type {Adobe.Photoshop.SaveDocumentType}
			 */
			public format: Adobe.Photoshop.SaveDocumentType;
			/**
			 * include an ICC profile based on Photoshop color compensation 
			 * ( default: false )
			 * @type {boolean}
			 */
			public includeProfile: boolean;
			/**
			 * download in multiple passes, progressive ( default: false )
			 * @type {boolean}
			 */
			public interlaced: boolean;
			/**
			 * controls amount of lossiness allowed ( default: 0 )
			 * @type {number}
			 */
			public lossy: number;
			/**
			 * defines colors to blend transparent pixels against
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public matteColor: Adobe.Photoshop.RGBColor;
			/**
			 * creates smaller but less compatible files ( default: true )
			 * @type {boolean}
			 */
			public optimized: boolean;
			/**
			 * if the format is PNG how many bits, true = 8, false = 24 ( 
			 * default: true )
			 * @type {boolean}
			 */
			public PNG8: boolean;
			/**
			 * quality of produced image ( default: 60 )
			 * @type {number}
			 */
			public quality: number;
			/**
			 * ( default: true )
			 * @type {boolean}
			 */
			public transparency: boolean;
			/**
			 * amount of transparency dither ( default: 100 )
			 * @type {number}
			 */
			public transparencyAmount: number;
			/**
			 * transparency dither algorithm ( default: Dither.NONE )
			 * @type {Adobe.Photoshop.Dither}
			 */
			public transparencyDither: Adobe.Photoshop.Dither;
			/**
			 * snaps close colors to web palette based on tolerance ( 
			 * default: 0 )
			 * @type {number}
			 */
			public webSnap: number;
		}
	}
}