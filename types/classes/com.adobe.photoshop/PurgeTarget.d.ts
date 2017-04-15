/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The cache to be targeted in a purge operation. */
		class PurgeTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Clears all caches. */
			public static readonly ALLCACHES: Adobe.Photoshop.PurgeTarget;
			/** Clears the clipboard. */
			public static readonly CLIPBOARDCACHE: Adobe.Photoshop.PurgeTarget;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Deletes all history states from the History palette. */
			public static readonly HISTORYCACHES: Adobe.Photoshop.PurgeTarget;
			/** Clears the undo cache. */
			public static readonly UNDOCACHES: Adobe.Photoshop.PurgeTarget;
			/** Constructor */
			public constructor();
		}
	}
}