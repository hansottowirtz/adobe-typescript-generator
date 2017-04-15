/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EliminateFields extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Eliminate even interlaced lines in a video image. */
			public static readonly EVENFIELDS: Adobe.Photoshop.EliminateFields;
			/** Eliminate odd interlaced lines in a video image. */
			public static readonly ODDFIELDS: Adobe.Photoshop.EliminateFields;
			/** Constructor */
			public constructor();
		}
	}
}