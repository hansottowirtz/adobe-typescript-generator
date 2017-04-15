/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DICOMOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** Anonymize the patient information */
			public anonymize: boolean;
			/** The number of columns in n-up configuration */
			public columns: number;
			/** Reverse(Invert) the image */
			public reverse: boolean;
			/** The number of rows in n-up configuration */
			public rows: number;
			/** Show Overlays (if present) */
			public showOverlays: boolean;
			/** Window Level */
			public windowLevel: number;
			/** Window Width */
			public windowWidth: number;
		}
	}
}