/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The destination, if any, for batch-processed files. */
		class BatchDestinationType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Outputs files to a folder. */
			public static readonly FOLDER: Adobe.Photoshop.BatchDestinationType;
			/** Leaves all files open. */
			public static readonly NODESTINATION: Adobe.Photoshop.BatchDestinationType;
			/** Saves changes and closes all files. */
			public static readonly SAVEANDCLOSE: Adobe.Photoshop.BatchDestinationType;
			/** Constructor */
			public constructor();
		}
	}
}