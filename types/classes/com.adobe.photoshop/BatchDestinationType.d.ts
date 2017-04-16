/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class BatchDestinationType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FOLDER: Adobe.Photoshop.BatchDestinationType;
			public static readonly NODESTINATION: Adobe.Photoshop.BatchDestinationType;
			public static readonly SAVEANDCLOSE: Adobe.Photoshop.BatchDestinationType;
			/** Constructor */
			public constructor();
		}
	}
}