/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocumentFill extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The background color as displayed in the toolbox. */
			public static readonly BACKGROUNDCOLOR: Adobe.Photoshop.DocumentFill;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Transparent. */
			public static readonly TRANSPARENT: Adobe.Photoshop.DocumentFill;
			/** White. */
			public static readonly WHITE: Adobe.Photoshop.DocumentFill;
			/** Constructor */
			public constructor();
		}
	}
}