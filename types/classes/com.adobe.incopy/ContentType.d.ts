/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ContentType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The frame is a graphics frame. */
			public static readonly GRAPHIC_TYPE: Adobe.Incopy.ContentType;
			/** Alias for GRAPHIC_TYPE. The frame is a graphics frame. */
			public static readonly graphicType: Adobe.Incopy.ContentType;
			/** The frame is a text frame. */
			public static readonly TEXT_TYPE: Adobe.Incopy.ContentType;
			/** Alias for TEXT_TYPE. The frame is a text frame. */
			public static readonly textType: Adobe.Incopy.ContentType;
			/** Alias for UNASSIGNED. No content type assigned. */
			public static readonly unassigned: Adobe.Incopy.ContentType;
			/** No content type assigned. */
			public static readonly UNASSIGNED: Adobe.Incopy.ContentType;
			/** Constructor */
			public constructor();
		}
	}
}