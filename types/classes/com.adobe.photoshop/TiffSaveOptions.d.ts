/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a TIFF document */
		class TiffSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/** save annotations */
			public annotations: boolean;
			/**
			 * Default value is 'Mac OS' when running on MacOS, and 'IBM 
			 * PC' when running on a PC
			 */
			public byteOrder: Adobe.Photoshop.ByteOrder;
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/** compression type ( default: TIFFEncoding.NONE ) */
			public imageCompression: Adobe.Photoshop.TIFFEncoding;
			/**
			 * are the channels in the image interleaved? ( default: true )
			 */
			public interleaveChannels: boolean;
			/**
			 * quality of produced image. Only valid for JPEG compressed 
			 * TIFF documents ( 0 - 12 )
			 */
			public jpegQuality: number;
			/** should only be used when you are saving layers */
			public layerCompression: Adobe.Photoshop.LayerCompression;
			/** save layers */
			public layers: boolean;
			/** ( default: false ) */
			public saveImagePyramid: boolean;
			/** save spot colors */
			public spotColors: boolean;
			public transparency: boolean;
		}
	}
}