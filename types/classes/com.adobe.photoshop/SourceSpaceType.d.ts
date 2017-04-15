/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The color space for the source when printing. */
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