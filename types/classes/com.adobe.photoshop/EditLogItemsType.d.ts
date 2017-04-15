/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The history log edit options. */
		class EditLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Save a concise history log. */
			public static readonly CONCISE: Adobe.Photoshop.EditLogItemsType;
			/** Save a detailed history log. */
			public static readonly DETAILED: Adobe.Photoshop.EditLogItemsType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Save a history for only for the session. */
			public static readonly SESSIONONLY: Adobe.Photoshop.EditLogItemsType;
			/** Constructor */
			public constructor();
		}
	}
}