/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PathType extends Adobe.Csawlib.CSEnumBase {
			/** The path is a closed path. */
			public static readonly CLOSED_PATH: Adobe.Indesign.PathType;
			/** Alias for CLOSED_PATH. The path is a closed path. */
			public static readonly closedPath: Adobe.Indesign.PathType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The path is an open path. */
			public static readonly OPEN_PATH: Adobe.Indesign.PathType;
			/** Alias for OPEN_PATH. The path is an open path. */
			public static readonly openPath: Adobe.Indesign.PathType;
			/** Constructor */
			public constructor();
		}
	}
}