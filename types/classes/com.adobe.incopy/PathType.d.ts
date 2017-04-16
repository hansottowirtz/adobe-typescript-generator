/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PathType extends Adobe.Csawlib.CSEnumBase {
			/** The path is a closed path. */
			public static readonly CLOSED_PATH: Adobe.Incopy.PathType;
			/** Alias for CLOSED_PATH. The path is a closed path. */
			public static readonly closedPath: Adobe.Incopy.PathType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The path is an open path. */
			public static readonly OPEN_PATH: Adobe.Incopy.PathType;
			/** Alias for OPEN_PATH. The path is an open path. */
			public static readonly openPath: Adobe.Incopy.PathType;
			/** Constructor */
			public constructor();
		}
	}
}