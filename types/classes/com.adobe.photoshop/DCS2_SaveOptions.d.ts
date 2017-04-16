/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Photoshop DCS 2.0 document */
		class DCS2_SaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * ( default: DCSType.NOCOMPOSITE )
			 * @type {Adobe.Photoshop.DCSType}
			 */
			public dCS: Adobe.Photoshop.DCSType;
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
			 * ( default: false )
			 * @type {boolean}
			 */
			public multiFileDCS: boolean;
			/**
			 * type of preview ( default: Preview.MACOSEIGHTBIT )
			 * @type {Adobe.Photoshop.Preview}
			 */
			public preview: Adobe.Photoshop.Preview;
			/**
			 * save spot colors
			 * @type {boolean}
			 */
			public spotColors: boolean;
			/**
			 * include transfer functions in document ( default: false )
			 * @type {boolean}
			 */
			public transferFunction: boolean;
			/**
			 * include vector data
			 * @type {boolean}
			 */
			public vectorData: boolean;
		}
	}
}