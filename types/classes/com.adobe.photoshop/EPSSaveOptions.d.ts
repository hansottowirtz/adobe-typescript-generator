/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving an EPS document */
		class EPSSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * type of encoding to use for document ( default: 
			 * SaveEncoding.BINARY )
			 * @type {Adobe.Photoshop.SaveEncoding}
			 */
			public encoding: Adobe.Photoshop.SaveEncoding;
			/**
			 * include halftone screen ( default: false )
			 * @type {boolean}
			 */
			public halftoneScreen: boolean;
			/**
			 * use image interpolation ( default: false )
			 * @type {boolean}
			 */
			public interpolation: boolean;
			/**
			 * type of preview ( default: Preview.MONOCHROMETIFF )
			 * @type {Adobe.Photoshop.Preview}
			 */
			public preview: Adobe.Photoshop.Preview;
			/**
			 * use Postscript color management ( default: false )
			 * @type {boolean}
			 */
			public psColorManagement: boolean;
			/**
			 * include transfer functions in document ( default: false )
			 * @type {boolean}
			 */
			public transferFunction: boolean;
			/**
			 * only valid when saving BitMap documents
			 * @type {boolean}
			 */
			public transparentWhites: boolean;
			/**
			 * include vector data
			 * @type {boolean}
			 */
			public vectorData: boolean;
		}
	}
}