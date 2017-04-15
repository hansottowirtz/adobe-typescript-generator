/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PointType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 72 points per inch. */
			public static readonly POSTSCRIPT: Adobe.Photoshop.PointType;
			/** 72.27 points per inch. */
			public static readonly TRADITIONAL: Adobe.Photoshop.PointType;
			/** Constructor */
			public constructor();
		}
	}
}