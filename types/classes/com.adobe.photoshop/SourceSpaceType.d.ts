/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SourceSpaceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The document color space. */
			public static readonly DOCUMENT: Adobe.Photoshop.SourceSpaceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The proof color space. */
			public static readonly PROOF: Adobe.Photoshop.SourceSpaceType;
			/** Constructor */
			public constructor();
		}
	}
}