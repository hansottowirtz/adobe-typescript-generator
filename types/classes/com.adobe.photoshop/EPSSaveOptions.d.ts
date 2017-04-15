/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EPSSaveOptions extends Adobe.Photoshop.SaveOptions {
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
			/** type of preview ( default: Preview.MONOCHROMETIFF ) */
			public preview: Adobe.Photoshop.Preview;
			/** use Postscript color management ( default: false ) */
			public psColorManagement: boolean;
			/** include transfer functions in document ( default: false ) */
			public transferFunction: boolean;
			/** only valid when saving BitMap documents */
			public transparentWhites: boolean;
			/** include vector data */
			public vectorData: boolean;
		}
	}
}