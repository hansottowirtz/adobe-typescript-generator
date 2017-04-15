/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CopyrightedType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The document is copyrighted. */
			public static readonly COPYRIGHTEDWORK: Adobe.Photoshop.CopyrightedType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The document is in the public domain. */
			public static readonly PUBLICDOMAIN: Adobe.Photoshop.CopyrightedType;
			/** The copyright status is not indicated. */
			public static readonly UNMARKED: Adobe.Photoshop.CopyrightedType;
			/** Constructor */
			public constructor();
		}
	}
}