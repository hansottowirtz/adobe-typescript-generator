/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as a 
		 * TIFF file
		 */
		class ExportOptionsTIFF extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: 
			 * AntiAliasingMethod.ARTOPTIMIZED )
			 * @type {Adobe.Illustrator.AntiAliasingMethod}
			 */
			public antiAliasing: Adobe.Illustrator.AntiAliasingMethod;
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * Mac or PC byte order when exporting ( default: 
			 * TIFFByteOrder.IBMPC )
			 * @type {Adobe.Illustrator.TIFFByteOrder}
			 */
			public byteOrder: Adobe.Illustrator.TIFFByteOrder;
			/**
			 * embed an ICC profile when exporting ( default: false )
			 * @type {boolean}
			 */
			public embedICCProfile: boolean;
			/**
			 * the color space of the exported file ( default: 
			 * ImageColorSpace.RGB )
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 */
			public imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/**
			 * compress TIFF file with LZW Compression when exporting ( 
			 * default: false )
			 * @type {boolean}
			 */
			public lZWCompression: boolean;
			/**
			 * The resolution of the exported file ( 72.0 - 2400.0; 
			 * default: 150.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * All the artboards or range of the artboards will be exported 
			 * ( default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}