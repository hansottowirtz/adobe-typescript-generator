/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Photoshop DCS 2.0 document */
		class DCS2_SaveOptions extends Adobe.Photoshop.SaveOptions {
			/** ( default: DCSType.NOCOMPOSITE ) */
			public dCS: Adobe.Photoshop.DCSType;
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/**
			 * type of encoding to use for document ( default: 
			 * SaveEncoding.BINARY )
			 */
			public encoding: Adobe.Photoshop.SaveEncoding;
			/** include halftone screen ( default: false ) */
			public halftoneScreen: boolean;
			/** use image interpolation ( default: false ) */
			public interpolation: boolean;
			/** ( default: false ) */
			public multiFileDCS: boolean;
			/** type of preview ( default: Preview.MACOSEIGHTBIT ) */
			public preview: Adobe.Photoshop.Preview;
			/** save spot colors */
			public spotColors: boolean;
			/** include transfer functions in document ( default: false ) */
			public transferFunction: boolean;
			/** include vector data */
			public vectorData: boolean;
		}
	}
}