/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Direction extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Horizontal. */
			public static readonly HORIZONTAL: Adobe.Photoshop.Direction;
			/** Vertical. */
			public static readonly VERTICAL: Adobe.Photoshop.Direction;
			/** Constructor */
			public constructor();
		}
	}
}