/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a TIFF document */
		class TiffSaveOptions extends Adobe.Photoshop.SaveOptions {
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
			 * Default value is 'Mac OS' when running on MacOS, and 'IBM 
			 * PC' when running on a PC
			 * @type {Adobe.Photoshop.ByteOrder}
			 */
			public byteOrder: Adobe.Photoshop.ByteOrder;
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * compression type ( default: TIFFEncoding.NONE )
			 * @type {Adobe.Photoshop.TIFFEncoding}
			 */
			public imageCompression: Adobe.Photoshop.TIFFEncoding;
			/**
			 * are the channels in the image interleaved? ( default: true )
			 * @type {boolean}
			 */
			public interleaveChannels: boolean;
			/**
			 * quality of produced image. Only valid for JPEG compressed 
			 * TIFF documents ( 0 - 12 )
			 * @type {number}
			 */
			public jpegQuality: number;
			/**
			 * should only be used when you are saving layers
			 * @type {Adobe.Photoshop.LayerCompression}
			 */
			public layerCompression: Adobe.Photoshop.LayerCompression;
			/**
			 * save layers
			 * @type {boolean}
			 */
			public layers: boolean;
			/**
			 * ( default: false )
			 * @type {boolean}
			 */
			public saveImagePyramid: boolean;
			/**
			 * save spot colors
			 * @type {boolean}
			 */
			public spotColors: boolean;
			/**
			 * @type {boolean}
			 */
			public transparency: boolean;
		}
	}
}