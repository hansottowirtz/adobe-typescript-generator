/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The location of history log data. */
		class SaveLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Save history log in a text file. */
			public static readonly LOGFILE: Adobe.Photoshop.SaveLogItemsType;
			/** Save history log in file metadata and a text file. */
			public static readonly LOGFILEANDMETADATA: Adobe.Photoshop.SaveLogItemsType;
			/** Save history log in file metadata. */
			public static readonly METADATA: Adobe.Photoshop.SaveLogItemsType;
			/** Constructor */
			public constructor();
		}
	}
}