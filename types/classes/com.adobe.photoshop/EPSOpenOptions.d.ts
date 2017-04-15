/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a generic EPS document */
		class EPSOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** use antialias? */
			public antiAlias: boolean;
			/** constrain proportions of image */
			public constrainProportions: boolean;
			/** height of image (unit value) */
			public height: string;
			/** the document mode */
			public mode: Adobe.Photoshop.OpenDocumentMode;
			/** the resolution of the document (in pixels per inch) */
			public resolution: number;
			/** width of image (unit value) */
			public width: string;
		}
	}
}